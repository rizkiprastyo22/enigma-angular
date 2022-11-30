# tutorial login pakai HTTP milik api heroku Todo

## 1. atur proxy

- buat file di src namanya "proxy.conf.json"

```
{
  "/api": {
    "target": "https://enigma-todo-app.herokuapp.com/api/v1/",
    "https": true,
    "changeOrigin": true,
    "pathRewrite": {
      "^/api/v1": ""
    },
    "logLevel": "debug"
  }
}
```

## 2. tambahkan "proxyConfig": "src/proxy.conf.json" di angular.json

```
"serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
      "proxyConfig": "src/proxy.conf.json"
    },
```
atau bisa dengan cara lain, tinggal tambahin di package.json bagian ng serve
```
ng serve --open --port=4300 ==proxy-config src/proxy.conf.json
```

cara kedua ini lebih bagus dari yang pertama kalo cuman buat kebutuhan production

## 3. jangan lupa thunder client untuk tambah data user baru di register dan tes login
POST - https://enigma-todo-app.herokuapp.com/api/v1/auth/register

Register Payload
```
{
    "email": "email@mail.com",
    "password": "password"
}
```

POST - https://enigma-todo-app.herokuapp.com/api/v1/auth/login

Login Payload
```
{
    "email": "email@mail.com",
    "password": "password"
}
```

## 4. tambahkan interface di shared dengan nama api-response.model.ts
```
export interface ApiResponse<T>{
    "code": 200,
    "status": "OK",
    "message": "User signed in successfully",
    "data": T
}
```

## 5. lakukan sama persis kayak di discord, tapi ubah beberapa kode di file-file berikut
- 1. auth.service
```
baseUrl: string = '/api/v1/auth/login';

  login(payload: Login): Observable<ApiResponse<LoginResponse>> {
    try {
      return this.http.post<ApiResponse<LoginResponse>>(this.baseUrl, payload);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
```

- 2. login.component.ts
```
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
```