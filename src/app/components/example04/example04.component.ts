import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example04',
  templateUrl: './example04.component.html',
  styleUrls: ['./example04.component.css']
})
export class Example04Component implements OnInit {

  elements = [
    {
      description: 'Elemento 1',
      check: false
    },
    {
      description: 'Elemento 2',
      check: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
