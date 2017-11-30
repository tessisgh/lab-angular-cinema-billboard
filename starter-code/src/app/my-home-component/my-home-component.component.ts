import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service'

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [CinemaService]
})
export class MyHomeComponentComponent implements OnInit {

  arrayPelis:Array<Object> = [];

  constructor(public cine: CinemaService) { }

  ngOnInit() {
    this.arrayPelis = this.cine.getMovies();
    console.log(this.arrayPelis);
  }

}
