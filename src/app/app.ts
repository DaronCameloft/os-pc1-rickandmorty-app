import { Component, signal } from '@angular/core';
import {ToolbarSection} from './shared/presentation/components/toolbar-section/toolbar-section';
import {FooterSection} from './shared/presentation/components/footer-section/footer-section';
import {CharacterList} from './character/presentation/components/character-list/character-list';


@Component({
  selector: 'app-root',
  imports: [
    ToolbarSection,
    FooterSection,
    CharacterList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('os-pc1-rickandmorty-app');
}
