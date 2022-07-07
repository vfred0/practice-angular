import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example03',
  templateUrl: './example03.component.html',
  styleUrls: ['./example03.component.css']
})
export class Example03Component implements OnInit {

  name: string = "Víctor";
  imgUrl: string = "assets/demo.png"
  
  constructor() { }

  ngOnInit(): void {
  }

  setName(name: string):void {
    this.name = name; 
  }

}
