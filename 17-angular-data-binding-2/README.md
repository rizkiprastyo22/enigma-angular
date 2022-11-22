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
