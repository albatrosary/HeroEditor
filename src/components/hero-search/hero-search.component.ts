import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { HeroSearchService } from './hero-search.service';
import { Hero } from '../shared/hero';

@Component({
  selector: 'hero-search',
  template: `
  <div id="search-component">
    <h4>Hero Search</h4>
    <input #searchBox id="search-box" (keyup)="search(searchBox.value)" />
    <div>
      <div *ngFor="let hero of heroes | async"
          (click)="gotoDetail(hero)" class="search-result" >
        {{hero.name}}
      </div>
    </div>
  </div>
  `,
  styleUrls:  ['components/hero-search/hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string) { this.searchTerms.next(term); }

  ngOnInit() {
    this.heroes = this.searchTerms
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Hero[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  gotoDetail(hero: Hero) {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
