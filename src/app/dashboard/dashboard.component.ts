import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';	
	 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  arrHeroes = [];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
	  this.getHeroes();  
  }
  
   getHeroes(){
	    this.heroService.getHeroes()
		 .subscribe(heros => this.arrHeroes = heros.slice(1, 5));
	  }
}