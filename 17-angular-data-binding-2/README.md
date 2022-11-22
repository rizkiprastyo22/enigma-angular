# property binding

## 1. membuat button baru bisa diclick 5 detik kemudian dengan cara

definisikan variable dan method di ts

```
clicked: boolean = true;

click5Detik(): void{
    setTimeout(() => {
      // this.clicked = false;
      // kalo mau bagus kodenya
      this.clicked = !this.clicked;
    }, 5000)
}

ngOnInit() {
  this.click5Detik()
}
```

lalu panggil di html nya

```
<button class="btn btn-primary" [disabled]="clicked">Bisa diclick 5 detik</button>
```

## 2. bisa juga menjalankan method ketika mentrigger di html.

- contoh menggunakan button tadi, kita ingin menjalankan fungsi tampilPesan()

button di html

```
<button class="btn btn-primary" [disabled]="clicked" (click)="tampilPesan()">Bisa diclick 5 detik</button>

<h4>{{ message }}</h4>
```

di ts

```
message: string = ''
tampilPesan(){
  this.message = 'aku muncul setelah diklik'
}
```

# Event Binding

## 1. kita bisa melakukan hover

- di ts

```
// ketika belum diapa apain
messageHover: string = 'Hover aku dong';

// ketika mouse ke messageHover
mouseOver(){
  this.messageHover = 'Makasih ya bang udah hover!'
}

// ketika mouse keluar dari messageHover
mouseOut(){
  this.messageHover = 'Lagi dong!'
}
```

- di html

```
<h4 [innerHTML]="messageHover" (mouseover)="mouseOver()" (mouseOut)="vmouseOut()"></h4>
```

## 2. kita bisa melakukan onChange

- contoh kita mau menampilkan tulisan input kita

- di ts

```
messageInput: string = ''

onMessageInput(input: any): void{
    console.log(input) // isinya object event
    console.log(input.target.value) // kalo mau ambil data valuenya
    // kita bisa destructive ambil key dalam object menjadi variabel
    const { value } = input.target
    // if(value.toLowerCase() === 'mandiri'){
    //   this.messageInput = 'aku '+ value.toLowerCase() + 'an';
    // }
    // else{
    //   this.messageInput = 'saya tetap mandirian';
    // }

    // biar keren
    value.toLowerCase() == 'mandiri' ? this.messageInput = 'aku mandirian'
    : this.messageInput = 'aku tetap mandirian'
  }
```

- di html
```
<input type="text" (change)="onMessageInput($event)">

<h4>{{ messageInput }}</h4>
```

- Nb: di html hanya bisa pakai $event, gabisa $message, $pesan, dll


# data sharing parent-child
## 1. parent -> child
- ini caranya gampang, tinggal menggunakan @Input
- contoh buat component parent dan child (di dalam parent)
- ng g c parent dan ng g c parent/child (sebenernya gapapa sih gausah di dalem parent, cuma <app-child> di dalam parent.component)
- urutannya:
### a. parent.component.ts
```
title: string = 'title dari parent.component'
```

### b. child.component.ts
```
import { Component, OnInit, Input } from '@angular/core';

@Input() title: string = ''
```

### c. child.component.html
```
<h5>{{ title }}</h5>
```

- menggunakan @Input() di child

## 2. child -> parent
- di child memerlukan EventEmitter

### a. child.component.ts
```
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Output() counter = new EventEmitter<number>()
```


# Two-way Binding