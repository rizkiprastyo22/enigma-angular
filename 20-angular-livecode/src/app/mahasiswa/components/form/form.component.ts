import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Mahasiswa } from '../../model/mahasiswa';
import { MahasiswaService } from '../../service/mahasiswa.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {

  mahasiswa!: Mahasiswa

  constructor(
    private mahasiswaService: MahasiswaService,
    private readonly route: ActivatedRoute,
    private router: Router
  ) {}

  mahasiswaForm: FormGroup = new FormGroup({
    id: new FormControl(),
    nim: new FormControl('', [Validators.required]),
    nama: new FormControl('', [Validators.required]),
    fakultas: new FormControl('', [Validators.required]),
    prodi: new FormControl('', [Validators.required]),
  })

  isFormValid(mahasiswaField: string): boolean {
    const control: AbstractControl = this.mahasiswaForm.get(mahasiswaField) as AbstractControl
    return(control && control.invalid && (control.dirty || control.touched))
  }

  onSubmit() {
    this.mahasiswaService.save(this.mahasiswaForm.value).subscribe()
    this.mahasiswaForm.reset()
    this.router.navigateByUrl('mahasiswa')
  }

  setForValue(mahasiswa: Mahasiswa){
    if(mahasiswa){
      this.mahasiswaForm.controls['id']?.setValue(mahasiswa.id)
      this.mahasiswaForm.controls['nim']?.setValue(mahasiswa.nim)
      this.mahasiswaForm.controls['nama']?.setValue(mahasiswa.nama)
      this.mahasiswaForm.controls['fakultas'].setValue(mahasiswa.fakultas)
      this.mahasiswaForm.controls['prodi']?.setValue(mahasiswa.prodi)
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        const { id } = params
        this.mahasiswa = this.mahasiswaService.getId(+id)
        this.setForValue(this.mahasiswa)
      }
    })
  }

  ngOnChanges(): void {
    this.setForValue(this.mahasiswa)
  }

}
