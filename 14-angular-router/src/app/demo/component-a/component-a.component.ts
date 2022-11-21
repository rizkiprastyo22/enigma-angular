import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {
  // variable penampung
  name: string = '';
  address: string = '';

  constructor(
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {

      // destruct object params
      const { name, address } = params;
      // kalo mau di hidden ketika gaada isi dari request param
      // if(!name || !address) {
      //   document.getElementById("h3").style.display = 'none';
      // }
      this.name = name;
      this.address = address;

    })
  }
}
