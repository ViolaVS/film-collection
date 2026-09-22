import { Component, computed, inject, input, numberAttribute } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FilmService } from '../../services/film-service';
import { DurationPipe } from '../../pipes/duration-pipe';

@Component({
  selector: 'app-film-details',
  imports: [RouterLink, DurationPipe],
  templateUrl: './film-details.html',
  styleUrl: './film-details.scss',
})
export class FilmDetails {
  private filmService = inject(FilmService);

  readonly id = input.required({ transform: numberAttribute });

  readonly film = computed(() => this.filmService.getById(Number(this.id())));
}
