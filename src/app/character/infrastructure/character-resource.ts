export interface OriginName {
  name: string;
}

export interface LocationName {
  name: string;
}

export interface CharacterResource {
  id: number;
  name: string;
  species: string;
  status: string;
  gender: string;
  origin:OriginName;
  location:LocationName;
  image: string
  url: string
}

export interface CharactersResponse {
  results: CharacterResource[];
}
