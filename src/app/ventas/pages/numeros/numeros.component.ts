import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {


  ventasNeta: number = 6780454.6544;
  portcentaje: number= 0.47;

  constructor() { }

  ngOnInit(): void {
  }

}
