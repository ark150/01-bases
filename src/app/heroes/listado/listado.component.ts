import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  /* constructor() { 
    console.log('constructor');
   }
   
  ngOnInit(): void {
    console.log('onInit');
  } */
  heroe:string='';
  heroes:string[]=['Spiderman', 'Ironman', 'Hulk', 'Thor'];

  /* borrarHeroe(){
    console.log('Borrando heroe');
    const heroeBorrado= this.heroes.shift();
    this.heroe= this.heroe+ ', '+ heroeBorrado;
    console.log(heroeBorrado)
  } */
  borrarHeroe(){
    console.log('Borrando heroe');
    const heroeBorrado= this.heroes.shift()||'';
    this.heroe= heroeBorrado;

  }

}
