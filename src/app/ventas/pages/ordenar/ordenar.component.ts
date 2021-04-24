import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Color, Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = false;
  typeSort: string = "nombre";

  heroes: Heroe[] = [
    {nombre: 'superman', vuela: true, color: Color.azul},
    {nombre: 'batman', vuela: false, color: Color.negro},
    {nombre: 'robin', vuela: false, color: Color.verde},
    {nombre: 'spiderman', vuela: false, color: Color.rojo},
    {nombre: 'linterna verde', vuela: true, color: Color.verde},
  ]

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  cambiarOrden(valor: string){
    this.typeSort = valor;
  }

}
