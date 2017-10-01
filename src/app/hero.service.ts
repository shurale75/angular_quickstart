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
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    //--------------------Hero by ID----------------------------------------------
    getHero(id: number): Promise<Hero> {
        return this.getHeroesSlowly()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}