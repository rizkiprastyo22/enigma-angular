# Langkah melanjutkan project 13-angular-components dengan bootstrap

# 1. npm install bootstrap

# 2. di styles.scss (root folder) copy code berikut

```// Variable overrides first
$primary: #900;
$enable-shadows: true;
$prefix: "mo-";

// Then import Bootstrap
@import "../node_modules/bootstrap/scss/bootstrap";
```

# 3. cara lain import bootstrap
- hapus styles.scss
- di angular.json replace code menjadi berikut
```
"styles": [
  "src/styles.scss",
  "./node_modules/bootstrap/scss/bootstrap.scss"
],
"scripts": [
  "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

# 4. udah deh tinggal copas code

Cara import global scss color
## 1. buat file color-pallete.scss di luar app (dalem src)
## 2. definisikan variabel
- contoh:
```
$primary-gold: #F8D000;
```

## 3. import di file scss yang membutuhkan
- contoh: di file home-faq-component.scss
```
@import "../../../../color-pallete.scss";

h1{
  color: $primary-gold;
}
```




