import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
 nombre: string = "Braulio"

 mostrarNombre(){
   console.log(this.nombre)
 }
}
