import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = "braulio";
  nombreUpper: string = "BRAULIO";
  nombreCompleto: string = "bRauliO MOnRoy";

  // Pipe de DATE
  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
