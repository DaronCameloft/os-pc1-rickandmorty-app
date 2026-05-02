import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Character} from '../domain/model/character.entity';
import {CharacterResource, CharactersResponse} from './character-resource';
import {map, Observable, pipe} from 'rxjs';
import {CharacterAssembler} from './character-assembler';

@Injectable({
  providedIn: 'root',
})

export class CharacterApiService {

  private readonly http = inject(HttpClient);

  private readonly baseUrl = environment.characterProviderApiBaseUrl;
  private readonly endpointPath = environment.characterProviderEndpoint

  getCharacters(): Observable<Character[]> {
    return this.http.get<CharactersResponse>(`${this.baseUrl}${this.endpointPath}`)
      .pipe(
      map(response => CharacterAssembler.toEntitiesFromResources(response.results))
    );
  }

}
