import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs'
import { Login, LoginResponse } from '../model/login.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storage: Storage = sessionStorage

  constructor() { }

  login(payload: Login): Observable<LoginResponse | null>{
    return new Observable<LoginResponse | null>((observer: Observer<LoginResponse | null>) => {
      try{
        const { email, password } = payload
        if(email === 'admin@gmail.com' && password === 'password'){
          const loginResponse: LoginResponse = {
            email: email,
            accessToken: '123'
          }
          this.storage.setItem('token', JSON.stringify(loginResponse))
          observer.next(loginResponse)
        }
        else{
          observer.next(null)
        }
      }
      catch(error: any){
        observer.error(error.message)
      }
    })
  }
}
