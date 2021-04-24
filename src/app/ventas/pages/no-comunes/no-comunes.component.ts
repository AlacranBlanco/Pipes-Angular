import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = "Braulio";
  genero: string = "masculino";
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  cliente: string[] = ['Braulio', 'Denisse', 'Pedrito', 'Pancho']
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    "other": 'tenemos # clientes esperando'
  }

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  cambiarPersona() {
    if(this.genero === 'masculino'){
      this.nombre = 'Denisse';
      this.genero = 'femenino';
    } else {
      this.nombre = "Braulio";
      this.genero = "masculino";
    }
  }

  borrarCliente(){
    this.cliente.shift();
  }


  // KeyValue Pipe
  persona = {
    nombre: 'Braulio',
    edad: 35,
    direccion: 'León, GTO'
  }

  //Json Pipe
  hroes = [
    { nombre: 'Superman', vuela: true},
    { nombre: 'Robin', vuela: false},
    { nombre: 'Aquaman', vuela: false},
  ]

  // Async pipe
  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Tenemos data de promesa');
    }, 3500);
  })

}
