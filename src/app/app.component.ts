import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIzquierda:string = '../assets/img/dice1.png'
  dadoDerecha:string = '../assets/img/dice4.png'

  numero1: number = 1
  numero2: number = 2
  constructor(){
    console.log(this.numero1)
  }
  tirarDados(){
    this.numero1 = Math.round(Math.random() * 5)+1

    this.numero2 =  Math.round(Math.random() * 5)+1
    console.log(this.numero1)
    console.log(this.numero2)
    this.dadoIzquierda = '../assets/img/dice'+this.numero1 + '.png'
    this.dadoDerecha = '../assets/img/dice'+this.numero2 + '.png'
  }
}
