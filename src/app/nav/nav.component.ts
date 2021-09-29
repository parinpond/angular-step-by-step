import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  labelContact:string="Contact";
  labelAbout:string="About";
  labelProduct:string="Product";
  employee:any={
    name:"YIM",
    age:30
  }
  constructor() { }

  ngOnInit(): void {
  }

}
