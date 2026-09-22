import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { FilmDetails } from './pages/film-details/film-details';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'film/:id', component: FilmDetails },
  { path: '**', component: NotFound },
];
