import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { MAHASISWA, Mahasiswa } from '../model/mahasiswa';

@Injectable({
  providedIn: 'root'
})
export class MahasiswaService {

  private mahasiswas: Mahasiswa[] = []
  private storage: Storage = sessionStorage

  constructor() { }

  getAll(): Observable<Mahasiswa[]>{
    return new Observable<Mahasiswa[]>((observer: Observer<Mahasiswa[]>) => {
      const sessionMahasiswas = this.storage.getItem(MAHASISWA) as string
      try {
        if(!sessionMahasiswas){
          const mahasiswas = [
            {
              id: 1,
              nim: '431405',
              nama: 'Rizki',
              fakultas: 'Teknik',
              prodi: 'Teknik Informatika'
            }
          ]
          this.mahasiswas = mahasiswas
          observer.next(this.mahasiswas)
        }
        else{
          this.mahasiswas = JSON.parse(sessionMahasiswas)
          observer.next(this.mahasiswas)
        }
        this.setToStorage()
      } catch (error: any) {
        observer.error(error.message)
      }
    })
  }

  save(mahasiswa: Mahasiswa): Observable<void>{
    return new Observable<void>((observer: Observer<void>): void => {
      try {
        if(mahasiswa.id){
          this.mahasiswas = this.mahasiswas.map((m) => {
            if(m.id === mahasiswa.id) m = mahasiswa
              return mahasiswa
            }         
          )
        }
        else{
          mahasiswa.id = this.mahasiswas.length + 1
          this.mahasiswas.push(mahasiswa)
        }
        this.setToStorage()
        observer.next()
      } catch (error: any) {
        observer.error(error.message)      
      }
    })
  }

  delete(mahasiswa: Mahasiswa): Observable<void>{
    return new Observable<void>((observer: Observer<void>): void => {
      try {
        for(let i = 0; i < this.mahasiswas.length; i++) {
          if(this.mahasiswas[i].id === mahasiswa.id) {
            this.mahasiswas.splice(i, 1)
            this.setToStorage()
            observer.next()
          }
      } 
    }
    catch (error: any) {
      observer.error(error.message)
    }
  })
}

getId(id: number): Mahasiswa {
  try {
    return this.mahasiswas.find((t) => t.id == id) as Mahasiswa;
  } catch (e: any) {
    return e.message;
  }
}

getById(id: number): Observable<Mahasiswa>{
  return new Observable<Mahasiswa>((observer: Observer<Mahasiswa>) => {
    try {
      observer.next(this.mahasiswas.find((m) => m.id == id) as Mahasiswa)
    } catch (error: any) {
      observer.error(error.message)
    }
  })
}

  setToStorage(): void{
    this.storage.setItem(MAHASISWA, JSON.stringify(this.mahasiswas))
  }
}
