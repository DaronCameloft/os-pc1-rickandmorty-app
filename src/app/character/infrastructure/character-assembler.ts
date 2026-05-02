import {CharacterResource, CharactersResponse, LocationName, OriginName} from './character-resource';
import {Character} from '../domain/model/character.entity';
import {map} from 'rxjs';
import {resource} from '@angular/core';

export class CharacterAssembler {
  static toEntityFromResource(resource: CharacterResource) {
    return new Character(
      resource.id,
      resource.name,
      resource.species,
      resource.status,
      resource.gender,
      resource.origin.name,
      resource.location.name,
      resource.image,
      resource.url
    )
  }

  static toEntitiesFromResources(resources: CharacterResource[]):Character[] {
    return resources.map(resource => this.toEntityFromResource(resource));
  }

}
