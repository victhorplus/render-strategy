import { Routes } from '@angular/router';
import { CharacterPage } from './character/character-page/character-page';

export const routes: Routes = [
  { path: '', component: CharacterPage },
  {
    path: 'lazy',
    loadComponent: () =>
      import('./character/character-page/character-page').then((m) => m.CharacterPage),
  },
];
