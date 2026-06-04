import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  image: string;
  location: { name: string };
}

interface ApiResponse {
  results: Character[];
}

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private http = inject(HttpClient);

  getAll(): Observable<Character[]> {
    return this.http
      .get<ApiResponse>('https://rickandmortyapi.com/api/character')
      .pipe(map((res) => res.results));
  }
}
