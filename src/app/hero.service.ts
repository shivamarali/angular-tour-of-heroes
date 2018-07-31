import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROESLIST }  from './mock-heroes';
import { MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})


export class HeroService {

  constructor(private messageService: MessageService) { }
  
  getHeroes(): Observable<Hero[]>{
	  this.messageService.add('HeroService: fetched heroes');
	  return of(HEROESLIST);
  }
  
  getHero(id: number): Observable<Hero> {
		// TODO: send the message _after_ fetching the hero
		this.messageService.add(`HeroService: fetched hero id=${id}`);
		return of(HEROESLIST.find(hero => hero.id === id));
	}

}
