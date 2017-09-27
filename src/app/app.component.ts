import { Component } from '@angular/core';
import {Hero} from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  providers: [HeroService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    title = 'Angular app >>>';
    hero: Hero = {
      id: 1,
      name: 'Windstorm'
    };
    selectedHero: Hero;
    heroes: Hero[];

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        // this.heroes = this.heroService.getHeroes();
        //this.heroService.getHeroesPromise().then(heroes => this.heroes = heroes);        //-----get data from mock immidiately
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);    //-----server latency simulation
    }
}

// const HEROES: Hero[] = [
//       { id: 11, name: 'Mr. Nice' },
//       { id: 12, name: 'Narco' },
//       { id: 13, name: 'Bombasto' },
//       { id: 14, name: 'Celeritas' },
//       { id: 15, name: 'Magneta' },
//       { id: 16, name: 'RubberMan' },
//       { id: 17, name: 'Dynama' },
//       { id: 18, name: 'Dr IQ' },
//       { id: 19, name: 'Magma' },
//       { id: 20, name: 'Tornado' }
//     ];

