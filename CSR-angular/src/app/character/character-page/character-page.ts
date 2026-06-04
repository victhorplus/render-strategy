import { Component, inject, OnInit, signal } from '@angular/core';
import { Character, CharacterService } from '../services/character';
import { Card } from '../components';

@Component({
  selector: 'app-character-page',
  imports: [Card],
  templateUrl: './character-page.html',
  styleUrl: './character-page.css',
})
export class CharacterPage implements OnInit {
  private characterService = inject(CharacterService);

  characters = signal<Character[]>([]);

  ngOnInit(): void {
    this.characterService.getAll().subscribe((data) => this.characters.set(data));
  }
}
