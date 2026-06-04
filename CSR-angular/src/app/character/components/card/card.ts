import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgClass],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  id = input.required<number>();
  name = input.required<string>();
  status = input.required<'Alive' | 'Dead'>();
  species = input.required<string>();
  image = input.required<string>();
  location = input.required<{ name: string }>();
}
