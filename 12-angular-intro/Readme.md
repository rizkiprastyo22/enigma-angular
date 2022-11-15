# kenapa pakai angular?
1. develop across all platform (bisa buat pc, mobile, web)
2. speed & performance (ngeklaim paling cepat dalam buat website, karena ngebuild datanya pakai RxJS)
3. tool-toolnya memudahkan developer (cara membuat komponen dengan cepat)
4. dicintai banyak developer
5. dokumentasi angular paling lengkap dan enak

# simpel deteksi web PWA
bisa highlight text menggunakan mobile

# installation
ng new dap-mandiri-apps --routing=false --style=scss

- dap-mandiri-apps (nama project)
- routing=false (belum masukin routing)
- style (pakai scss)

# cara lain install
ng new dap-mandiri-apps --routing=false --style=scss --directory .

--directory . (digunakan untuk membuat angular pada folder yang sudah terlanjut dibuat)
kalo gapake --directory . ng terpaksa buat folder baru di dalam folder tersebut

# cara menjalankan angular
ng serve (tapi kalo udah diatur package.json nya, ketiknya npm start)

default port nya adalah 4200

# cara buat branching
git checkout -b 1-angular-intro (jadi di git bisa pisah branch sesuai materi)

# cara agar tiap kali ng serve bisa langsung buka di browser di port 8080
"start": "ng serve --open --port=8080"

# devDependencies pada default angular
- ada jasmine dan karma itu digunakan untuk unit testing pada angular
- kenapa di devDependencies? ya karena cuman buat kebutuhan development

# kalo nemu file spec.ts
itu digunakan untuk unit testing

# karma.conf.js
- file untuk mengatur unit testing
- menggunakan chrome sebagai default launcher

# isi file angular.json
- file untuk mengatur project angular
- sourceRoot = folder default kode (default src)
- prefix = berarti tempat kalo buat komponen (default app, ini di dalam src)
- dist = tempat file ketika kita deploy app
- assets = tempat nyimpen asset
- styles & scripts = kalo kita mau nambahin bootstrap di sini

# isi folder src
- test.ts (file yang digunakan untuk unit testing)
- styles.scss (ini styling yang sifatnya global)
- polyfills.ts (command yang dipakai kalo butuh tinggal uncomment)
- main.ts (untuk menjalankan program secara global)
- index.html (html secara global)
- environments (diisi bagian aplikasi kita yang bisa dipakai komponen lain)
- assets (file asset yang bakal digunakan)
- app (komponen utama pada angular)

# isi folder app
folder terdiri dari:

## 1. app.component.html (html yang bisa diliat di google)
biasanya ini gabakal kita ubah karena kita bakal bikin html di komponen baru

## 2. app.component.scss
file untuk desain global

## 3. app.component.spec.ts
file untuk unit testing

## 4. app.component.ts
### - untuk atur komponen global
### - di dalam class AppComponent untuk deklarasi variable secara global

### - isi dalam @component gaharus ada 3, yang wajib selector dan templateUrl
selector = pengenal biar bisa dipanggil di html

### - selector ini pengenal tiap komponen
jadi kalo misalnya ada perubahan nama komponen, pengaturannya di selector dan nanti dipanggilnya sesuai nama di selector

### - templateUrl memudahkan untuk templating
sama seperti selector, nama file dan cara manggil html nya harus sama

### - kalo misalnya kita gabutuh manggil filenya, manggilnya template tanpa nulis Urls
- contoh: templateUrl = 'app.component.html'
- kalo gabutuh panggil file html, contoh: template = '(open tag h1)Hello(close tag h1)'

## 5. app.component.module.ts
- untuk atur module secara global
- module itu sebagai kerangka/titik kumpul pada kumpulan komponen di angular
- module itu mewakili komponen
- declarations = ketika ada komponen baru, harus didaftarkan disini
- imports = untuk import module/library di app angular kita
- exports = untuk komponen bisa dipakai di luar (tapi kalo mau export, jangan lupa di functionnya deklarasiin itu bisa diexport)
- providers = untuk panggil service

# @ adalah declarator
jadi kalo misalnya @Component declarator itu adalah component

# Ciri khas SPA
- dia ga ngerefresh setiap pindah routing/pindah menu
- jadi ketika load suatu web, semua data web diambil, lalu disimpen (jadi kalo pindah menu, cuma ganti tampil file, gaharus ambil file lagi di server)

# file selain angular.json bisa hard reload
- artinya apa? app akan update otomatis kalo ada perubahan tanpa harus npm start lagi
- sedangkan kalo ada perubahan di angular.json perlu start ulang untuk update

# kalo misalnya kita mau run clone project orang yang gaada node_modules
kalo mau jalanin, HARUS npm install dulu sebelum ng serve!!!!

# ng generate
untuk mengenerate file

# apa aja yang bisa dibuat ng generate?
## 1. component gunakan "ng generate component"
### - contoh: ng generate component home
### - nanti akan terbuat folder home otomatis dan sudah didaftarkan di app.component.module.ts
### - lalu gimana kalo misalnya buat component ga didalem folder home? Gunakan "ng generate component home --flat"
### - lho malah garapih dong? ya emang, tapi --flat ini berguna jika ada component dalam component yang sejenis dengan componen
#### contoh: ada component form dan list pada component user, customer, employee. Berarti kamu bisa buat component dengan cara di bawah ini
- "ng generate component user/form/user-form --flat"
- "ng generate component user/list/user-list --flat"
- "ng generate component customer/form/customer-form --flat"
- "ng generate component customer/list/customer-list --flat"
- "ng generate component employee/form/employee-form --flat"
- "ng generate component employee/list/employee-list --flat"
(kasih --skip-tests yang kode di atas biar gamau pake spec.ts)
### - kalo setiap buat component baru kita gamau ada spec.ts, bisa generate dengan cara
- "ng generate component home --skip-tests"
### - terus gimana kalo seandainya mau spec.ts otomatis?
1. tambah extention "Angular spec generator"
2. klik kanan file component.ts, lalu pilih "Angular: Generate test"
### - gimana cara manggil component dari component lain?
- gunakan <app-(nama component)>
- contoh: mau manggil component home di app.component.html, tinggal ketik <app-home>

## 2. directive gunakan "ng generate directive"
## 3. enum gunakan "ng generate enum"
## 4. guard gunakan "ng generate guard"
## 5. interceptor gunakan "ng generate interceptor"

# ng add
untuk menambahkan library dari luar ke dalam

# cara styling pake scss?
## - sama aja kayak css, tapi bedanya bisa declare variabel
- contoh: 
```
$primary_color: blue;

h1{
  color: $primary_color;
}

h2{
  color: $primary_color;
}
```
## - kita bisa styling global di styles.scss

# tugas
## buat component berikut:
1. toolbar
2. highlight
3. resource
4. next-step (terminal dan link disatuin dengan next-step)
5. footer
semuanya masukin ke dalam folder dashboard, spec gaada, dan panggil app.component

# cara add module pada component utama
"ng generate module dashboard"
lalu pindahkan module dari app.module.ts ke dashboard.module.ts
### INGAT!! Biasakan buat module dulu jika ingin membuat lebih dari satu component dalam satu folder
