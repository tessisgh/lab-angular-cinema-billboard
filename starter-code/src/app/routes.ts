import { Routes } from "@angular/router";
import { MyHomeComponent } from './my-home-component/my-home-component.component';
import { MyMovieComponent } from './my-movie-component/my-movie-component.component';

const routes:Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'movie/:id', component: MyMovieComponent }
];


export {routes};
