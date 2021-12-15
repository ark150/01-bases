import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz-interface';
import { DbzService } from '../services/dbz.service';


@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html'
})
export class MainPageComponent {

	/* constructor() { }

	ngOnInit(): void {
	} */

	/* personajes: Personaje[]=[]; */

	/* get personajes(): Personaje[]{
		return this.dbzService.personajes;
	} */

	nuevo: Personaje ={
		nombre:'Maestro Roshi',
		poder:1000
	}

	/* agregarNuevoPersonaje(pers: Personaje){
		this.personajes.push(pers);
	} */

	constructor(/* public dbzService:DbzService */) {	
		/* this.personajes = this.dbzService.personajes; */
	}

}
