import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../../model/mahasiswa';
import { MahasiswaService } from '../../service/mahasiswa.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  mahasiswas: Mahasiswa[] = []

  constructor( private readonly mahasiswaService: MahasiswaService ) {}

  ngOnInit(): void {
    this.onLoadMahasiswa()
  }

  onLoadMahasiswa(): void{
    this.mahasiswaService.getAll().subscribe({
      next: (mahasiswas: Mahasiswa[]) => {
        this.mahasiswas = mahasiswas
        console.log('isi mahasiswas: ', this.mahasiswas)     
      }
    })
  }

  onDeleteMahasiswa(mahasiswa: Mahasiswa): void{
    this.mahasiswaService.delete(mahasiswa).subscribe()
  }
}
