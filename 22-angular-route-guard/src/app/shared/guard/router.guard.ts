import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class RouterGuard implements CanActivate, CanActivateChild {
  constructor(private readonly router: Router){}
  canActivate(): boolean {
    return true;
  }
  canActivateChild(): boolean {
    return true;
  }
  authorize(): boolean{
    const authToken: boolean = (sessionStorage.getItem('toke') != null)
    if(!authToken){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'kamu belum bisa akses halaman ini, silakan login'
      })
      this.router.navigateByUrl('/auth/login')
    }
    return authToken
  }
  
}
