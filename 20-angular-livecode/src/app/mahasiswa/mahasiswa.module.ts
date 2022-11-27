import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MahasiswaComponent } from './mahasiswa.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { MahasiswaRoutingModule } from './mahasiswa-router.module';
import { MahasiswaService } from './service/mahasiswa.service';

const components = [
  MahasiswaComponent,
  ListComponent,
  FormComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MahasiswaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[MahasiswaService],
  exports: [MahasiswaComponent]
})
export class MahasiswaModule { }
