import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../movies.reducer';
import { FetchMovies, ChangePage, Pagination, FetchCharacter } from '../movies.actions';
import {
  getMovies,
  getIsLoading,

  // getIsFirstPage,
  // getIsLastPage
} from '../../reducers/index';
import { Movie } from '../models/movie';
import { Character } from '../../characters/models/character';
import { getMovie, getMovieCharacters } from '../../reducers';

@Component({
  selector: 'swapi-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent implements OnInit {
  characters$: Observable<Character[]> = this.store.pipe(select(getMovieCharacters));
  movies$: Observable<Movie[]> = this.store.pipe(select(getMovies));
  isFirst$: Observable<boolean>;
  isLast$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  


  constructor(private store: Store<State>) {}

  ngOnInit() {
    // console.log("---movies---:",this.movies$);
    
    // this.isFirst$ = this.store.select(getIsFirstPage);
    // this.isLast$ = this.store.select(getIsLastPage);
    this.isLoading$ = this.store.select(getIsLoading);
   
    this.store.dispatch(new FetchMovies());
    
  }



  trackByUrl(index: number, hero: Movie): string {
    return hero.title;
  }
}
