import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    <h1>Hola mundo</h1>
    <h1> {{title}} </h1>
    <h3>La base es: <strong>{{base}}</strong> </h3>
    <button (click)="acumular(base); "> + {{base}} </button>
    <span> {{numero}} </span>
    <button (click)="acumular(-base) ; "> - {{base}} </button>


    `
})

export class ContadorComponent {
    public title: string = 'contador app';
    public base: number = 5;
    public numero: number = 5;
    public numero2: number = 10;
    sumar() {
        this.numero += 1;
    }
    resta() {
        this.numero -= 1;
    }
    acumular(valor: number) {
        this.numero += valor;
    }
}