import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  fullName:string="";
  age:number=30;
  constructor() { }

  ngOnInit(): void {
  }
  myKeyUp(){
    console.log(this.fullName.length);
  }
  doSave(){
    console.log("Hello");
  }

}
