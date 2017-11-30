import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service'

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [CinemaService]
})
export class MyMovieComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
