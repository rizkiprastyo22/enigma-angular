import { Observable } from "rxjs";
import { Mahasiswa } from "../model/mahasiswa";

export interface IMahasiswa {
    getAll(): Observable<Mahasiswa[]>
    save(mahasiswa: Mahasiswa): Observable<void>
    delete(mahasiswa: Mahasiswa): Observable<void>
    getById(id: number): Observable<Mahasiswa>
}
