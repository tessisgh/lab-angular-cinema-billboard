import { Injectable } from '@angular/core';
import movieSample from './sample-movies';


@Injectable()
export class CinemaService {
  movies = movieSample;

constructor () {}

  getMovies(){
  return this.movies;
  }

  getMovie(id){
  return this.movies[id-1];
  }
}
