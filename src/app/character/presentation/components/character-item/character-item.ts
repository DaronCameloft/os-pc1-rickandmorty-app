import {Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {Character} from '../../../domain/model/character.entity';

@Component({
  selector: 'app-character-item',
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './character-item.html',
  styleUrl: './character-item.css',
})
export class CharacterItem {
  @Input() character!: Character;
}
