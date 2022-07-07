import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example02',
  templateUrl: './example02.component.html',
  styleUrls: ['./example02.component.css']
})
export class Example02Component implements OnInit {

  name: string = "Víctor";
  imgUrl: string = "assets/demo.png"
  
  constructor() { }

  ngOnInit(): void {
  }

  setName(name: string):void {
    this.name = name; 
  }

}
