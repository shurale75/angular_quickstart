import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

    getHeroes(): Hero[] {
        return HEROES;
    }

    //-------------------Promise----------------------------------------
    getHeroesPromise(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    //------------------SERVER SIMULATION--------------------------------------------
    getHeroesSlowly(): Promise<Hero[]> {
        /*return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);*/

        return new Promise(resolve => { setTimeout(() => resolve(this.getHeroes()), 2000); });
    }

    //--------------------Hero by ID----------------------------------------------
    getHero(id: number): Promise<Hero> {
        return this.getHeroesSlowly()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}