//import { HEROES } from './mock-heroes';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {

    private heroesUrl = 'api/heroes';

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json() as Hero[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    //--------------------Hero by ID----------------------------------------------
    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Hero)
            .catch(this.handleError);
    }

    // getHero(id: number): Promise<Hero> {
    //     return this.getHeroes()
    //         .then(heroes => heroes.find(hero => hero.id === id));
    // }


    //-----------------Hero update--------------------------------------------------
    private headers = new Headers({'Content-Type': 'application/json'});

    update(hero: Hero): Promise<Hero> {
        console.log('UPDATE HERO:', hero);
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    //-----------------Hero create---------------------------------------------------
    create(name: string): Promise<Hero> {
        console.log('NEW NAME:', name);
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Hero)
            .catch(this.handleError);
    }

    //-----------------Hero delete---------------------------------------------------
    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }


    // getHeroes(): Hero[] {
    //     return HEROES;
    // }

    //-------------------Promise----------------------------------------
    // getHeroesPromise(): Promise<Hero[]> {
    //     return Promise.resolve(HEROES);
    // }

    //------------------SERVER SIMULATION--------------------------------------------
    // getHeroesSlowly(): Promise<Hero[]> {
    //     /*return this.http.get(this.heroesUrl)
    //         .toPromise()
    //         .then(response => response.json())
    //         .catch(this.handleError);*/
    //
    //     return new Promise(resolve => { setTimeout(() => resolve(this.getHeroes()), 2000); });
    // }




}