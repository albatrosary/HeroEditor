import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }        from '../shared/hero';
import { HeroService } from '../shared/hero.service';

@Component({
  selector: 'my-dashboard',
  template: `
    <h3>Top Heroes</h3>
    <div class="grid grid-pad">
      <div *ngFor="let hero of heroes" (click)="gotoDetail(hero)" class="col-1-4">
        <div class="module hero">
          <h4>{{hero.name}}</h4>
        </div>
      </div>
    </div>
    <hero-search></hero-search>
  `,
  styleUrls: ['components/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero) {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}