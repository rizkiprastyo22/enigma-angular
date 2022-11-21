# perbedaan url sama path
- url itu kayak 'http://localhost:4200/home/about'
- path itu '/home/about'

# perbedaan / dan ? pada url web
- 'http://localhost:4200/home/about/79w84794179-www-cdf' -> ini path variable (bersifat wajib, kalo ga sesuai 404 not found)
- 'http://localhost:4200/home/about?name=guguugg&address=rumahgugug' -> ini request params (bersifat opsional, karena yang diambil name dan addressnya)

# di angular sudah menyediakan router
-  tag <router-outlet> -> contoh directive programming

# cara menambahkan router di angular

## 1. buat component a dan b di demo
## 2. tambahkan module router di app.module.ts
```
import { RouterModule } from '@angular/router';

RouterModule.forRoot([
    {
      path: '',
      component: ComponentAComponent
    },
    {
      path: 'component-b',
      component: ComponentBComponent
    }
])
```
## 3. di app.module.ts tinggal kasih router-outline
```
<router-outlet></router-outlet>
```

- sampai sini sudah bisa muncul jika kita ketik url
http://localhost:4300/component-b

# 4. agar bisa pindah pakai tombol, bisa gini
di component-a.component
```
<a routerLink="/component-b" class="btn btn-outline-primary">Go to component b</a>
```

di component-b-component
```
<a routerLink="" class="btn btn-outline-primary">Go to component b</a>
```

# 5. agar lebih rapih, bisa buat file module routing terpisah
buat di root, app-routing.module.ts
```
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentAComponent } from "./demo/component-a/component-a.component";
import { ComponentBComponent } from "./demo/component-b/component-b.component";

const routes: Routes = [
    {
        path: '',
        component: ComponentAComponent
      },
      {
        path: 'component-b',
        component: ComponentBComponent
      }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
```

lalu di app.module.ts tinggal tambahin
imports: [
    AppRoutingModule
]

# 6. jika kita ingin component-a  dalam path '/component-a', kita harus menambahkan
```
{
    path: '',
    redirectTo: '/component-a',
    pathMatch: 'full'
}
```

sehingga untuk path component-a bisa diubah jadi
```
{
    path: 'component-a',
    component: ComponentAComponent
}
```

## nb: mohon diperhatikan path tidak boleh diawali dengan '/' karena sudah otomatis ditambahkan. untuk redirectTo, routerLink, itu harus tambahkan '/'

# 7. tambahkan Page Error 404 Not Found
- buat component not-found di shared, isinya bebas
- cara manggil di app-routing.module.ts
```
{
    path: '**',
    component: NotFoundComponent
}
```
- jangan lupa di shared.module.ts harus deklarasi NotFoundComponent

# 8. bikin path children
- buat component di dalam parentnya (misal ng g c demo/component-a/child-aa dan ng g c demo/component-a/child-ab)
- di app-routing update path component-a dengan property children
```
{
  path: 'component-a',
  component: ComponentAComponent,
  children:[
      {
          path: 'child-aa',
          component: ChildAaComponent
      },
      {
          path: 'child-ab',
          component: ChildAbComponent
      },
    ]
}
```