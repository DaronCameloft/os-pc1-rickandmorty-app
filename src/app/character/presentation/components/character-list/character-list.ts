import {Component, inject} from '@angular/core';
import {CharacterItem} from '../character-item/character-item';
import {CharacterStore} from '../../../application/character.store';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-character-list',
  imports: [
    CharacterItem,
    TranslatePipe
  ],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList {
  protected readonly characterStore = inject(CharacterStore)
  ngOnInit() {
    this.characterStore.loadCharacters();
  }
}
