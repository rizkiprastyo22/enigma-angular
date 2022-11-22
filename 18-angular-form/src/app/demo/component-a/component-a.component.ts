import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {
  // kita bisa tampilin data dari variabel
  // name: string = 'Milea';
  // address: string = 'Bandung';
  participants: string[] = ['bulan', 'bintang', 'matahari']
  // languages = {
  //   name: 'Angular',
  //   difficulty: 'Intermediate',
  // }

  clicked: boolean = true;
  message: string = '';
  messageHover: string = 'Hover aku dong';
  messageInput: string = '';

  characterGenshin = [
    {
    name: 'Lumine',
    vision: 'dendro',
    atk: [{
      normal: 'normal',
      chage: 'charge'
    }]
    }
  ]

  click5Detik(): void{
    setTimeout(() => {
      // this.clicked = false;
      // kalo mau bagus kodenya
      this.clicked = !this.clicked;
    }, 5000)
  }

  tampilPesan(): void {
    // alert('aku diklik')
    this.message = 'aku diklik'
  }

  mouseOver(){
    this.messageHover = 'Makasih ya bang udah hover!'
  }

  mouseOut(){
    this.messageHover = 'Lagi dong!'
  }

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

  // cara lain data binding array object
  // characterGenshins(): string {
  //   let string = ''
  //   for(let i = 0; i < this.characterGenshin.length; i++){
  //     string += `${this.characterGenshin[i].name} dengan vision ${this.characterGenshin[i].vision}, `
  //   }
  //   return string
  // }

  constructor(
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.click5Detik();
    
    // this.route.queryParams.subscribe((params) => {

      // destruct object params
      // const { name, address } = params;
      // kalo mau di hidden ketika gaada isi dari request param
      // if(!name || !address) {
      //   document.getElementById("h3").style.display = 'none';
      // }
    //   this.name = name;
    //   this.address = address;

    // })
  }
}
