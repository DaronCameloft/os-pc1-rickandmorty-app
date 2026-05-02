import {computed, inject, Injectable, signal} from '@angular/core';
import {CharacterApiService} from '../infrastructure/character-api';
import {Character} from '../domain/model/character.entity';

@Injectable({
  providedIn: 'root'
})

export class CharacterStore {

  private readonly characterApiService = inject(CharacterApiService);

  private readonly charactersSignal = signal<Character[]>([])
  private readonly loadingSignal = signal<boolean>(false)
  private readonly errorMessageSignal = signal<string>('')

  readonly characters = computed(() => this.charactersSignal())
  readonly isLoading = computed(() => this.loadingSignal())
  readonly errorMessage = computed(() => this.errorMessageSignal())

  loadCharacters(): void {
    if(this.charactersSignal().length > 0) return;

    this.loadingSignal.set(true)
    this.errorMessageSignal.set('')

    this.characterApiService.getCharacters().subscribe({
      next: (characters: Character[]) => {
        this.charactersSignal.set(characters);
        this.loadingSignal.set(false)
      },
      error: () => {
        this.errorMessageSignal.set('Unable to load characters.');
        this.loadingSignal.set(false)
      }
    })

  }
}
