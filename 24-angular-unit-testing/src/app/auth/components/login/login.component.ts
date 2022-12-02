import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiResponse } from 'src/app/shared/model/api-response.model';
import Swal from 'sweetalert2';
import { LoginResponse } from '../../model/login.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  storage: Storage = sessionStorage;

  constructor(
    private readonly authService: AuthService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  // validation
  isFormValid(loginField: string): boolean {
    const control: AbstractControl = this.loginForm.get(
      loginField
    ) as AbstractControl;
    return control && control.invalid && (control.dirty || control.touched);
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const payload = this.loginForm.value;
    this.authService.login(payload).subscribe({
      next: (response: ApiResponse<LoginResponse>) => {
        this.onSuccessLoggedIn(response);
      },
      error: (errorResponse: HttpErrorResponse) => {
        this.onErrorLoggedIn(errorResponse);
      },
    });
  }

  private onSuccessLoggedIn(response: ApiResponse<LoginResponse>) {
    const { accessToken } = response.data;
    this.storage.setItem('token', accessToken);
    this.route.queryParams.subscribe({
      next: (params: Params) => {
        const { next } = params;
        this.router.navigateByUrl(next).finally();
      },
    });
  }

  private onErrorLoggedIn(error: HttpErrorResponse) {
    if (error.status === 401) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email atau Password salah!',
      });
    }
  }
}
