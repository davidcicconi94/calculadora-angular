import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculadora-angular';

  numberOne: number = 0;
  numberTwo: number = 0;
  resultado: number = 0;

  sumar(): void {
    this.resultado = this.numberOne + this.numberTwo;
  }

  restar(): void {
    this.resultado = this.numberOne - this.numberTwo;
  }

  multiplicar(): void {
    this.resultado = this.numberOne * this.numberTwo;
  }

  dividir(): void {
    if (this.numberTwo == 0) {
      alert('ERROR: el divisor no puede ser 0!< ');
    } else {
      this.resultado = this.numberOne / this.numberTwo;
    }
  }
}
