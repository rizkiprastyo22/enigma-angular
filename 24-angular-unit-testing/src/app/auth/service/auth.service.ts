import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs'
import { Login, LoginResponse } from '../model/login.model'
import { ApiResponse } from '../../shared/model/api-response.model'

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpClient) { }

  baseUrl: string = '/api/v1/auth/login';

  login(payload: Login): Observable<ApiResponse<LoginResponse>> {
    try {
      return this.http.post<ApiResponse<LoginResponse>>(this.baseUrl, payload);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
