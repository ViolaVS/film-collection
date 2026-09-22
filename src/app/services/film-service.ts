import { Injectable, computed } from '@angular/core';
import { films } from '../data/films';
import { Film } from '../models/film';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private films = signal<Film[]>(films);

  public readonly allFilms = this.films.asReadonly();

  search = signal<string>('');

  favorites = computed(() => this.films().filter((film) => film.isFavorite));

  toggleFavorite(filmId: number): void {
    const updatedFilms = this.films().map((film) => {
      return film.id === filmId ? { ...film, isFavorite: !film.isFavorite } : film;
    });
    this.films.update(() => updatedFilms);
  }

  filteredFilms = computed(() => {
    return this.allFilms().filter((film) =>
      film.title.toLowerCase().includes(this.search().toLowerCase()),
    );
  });

  getById(id: number): Film | undefined {
    return this.films().find((film) => film.id === id);
  }
}
