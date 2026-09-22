import { Component, input, output, inject } from '@angular/core';
import { Film } from '../../models/film';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<Film>();
  router = inject(Router);
  toggleFavorite = output<number>();

  onToggleFavorite(event: Event) {
    event.stopPropagation();
    console.log(
      `Toggling favorite for film ID: ${this.film().id},isFavorite: ${this.film().isFavorite}`,
    );
    this.toggleFavorite.emit(this.film().id);
  }
  goToDetails() {
    this.router.navigate(['/film', this.film().id]);
  }
}
