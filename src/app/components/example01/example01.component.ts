import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example01',
  templateUrl: './example01.component.html',
  styleUrls: ['./example01.component.css']
})
export class Example01Component implements OnInit {
  name: string = "Víctor";
  imgUrl: string = "assets/demo.png"
  constructor() { }

  ngOnInit(): void {
  }

}
