    import { Component, OnInit } from '@angular/core';
    import { Hero } from '../hero';
    //import { HEROESLIST } from '../mock-heroes';
    import { HeroService } from '../hero.service';	
	
    @Component({
      selector: 'app-heroes',
      templateUrl: './heroes.component.html',
      styleUrls: ['./heroes.component.css']
    })

    export class HeroesComponent implements OnInit {
	  
	  arrHeroes= [] ;      //Hero[]; 
      //selectedHero: '' ; //Hero
	 
      constructor(private heroService: HeroService) { }
     
      ngOnInit() {
		this.getHeroes();  
      }
     
	  //onSelect(selHero) {
	  //  this.selectedHero = selHero;
	  //}
	  
	  getHeroes(){
	    this.heroService.getHeroes()
		 .subscribe(heros => this.arrHeroes = heros );
	  }
    }