import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {
  // kita bisa tampilin data dari variabel
  name: string = 'Milea';
  address: string = 'Bandung';
  participants: string[] = ['bulan', 'bintang', 'matahari']
  languages = {
    name: 'Angular',
    difficulty: 'Intermediate',
  }
  characterGenshin = [{
    name: 'Lumine',
    vision: 'dendro'
  },{
    name: 'Raiden',
    vision: 'electro'
  }]

  // cara lain data binding array object
  characterGenshins(): string {
    let string = ''
    for(let i = 0; i < this.characterGenshin.length; i++){
      string += `${this.characterGenshin[i].name} dengan vision ${this.characterGenshin[i].vision}, `
    }
    return string
  }

  constructor(
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
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
