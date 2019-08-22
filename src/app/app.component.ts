import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  var1: number;
  var2: number;
  result: number;


  sumar(){
    this.result=this.var1+this.var2;
  }

  restar(){
    this.result=this.var1-this.var2;
  }

  dividir() {
    if (this.var2 == 0) {
      alert('No se puede dividir en 0');
      return;
    }
    this.result=this.var1/this.var2;
  }

  multiplicar(){
    this.result=this.var1*this.var2;
  }

  modulo() {
    this.result=this.var1%this.var2;
  }


  reset()
 {
   this.var1 = null;
   this.var2 = null;
   this.result = null;
 }
}
