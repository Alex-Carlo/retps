import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from '../../characters/models/character';
import { State } from '../movies.reducer';
import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';
import { FetchCharacter, FetchMovies } from '../movies.actions';

@Component({
  selector: 'swapi-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements OnInit {
  
  @Input() movie: Movie;
  constructor(public MovieService: MovieService,
    private router: Router, private store:Store<State>){}
  ngOnInit(): void {
   
    this.store.dispatch(new FetchCharacter());
  }

  openMoviesDetails(movie:Movie){
    // console.log("openMoviesDetails:",movie);
    this.MovieService.selectedFilm = movie;
  // console.log("movie.id:",movie.id);
    
  
    this.router.navigate(['/movies', movie.id]);
  }
}
