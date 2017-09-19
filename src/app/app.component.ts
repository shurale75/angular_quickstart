import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>`,
  styleUrls: ['./app.component.css']
})
export class Hero {
  id: number;
  name: string;
}

export class AppComponent {
  title = 'Angular app >>>';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
