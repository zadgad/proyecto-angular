export interface GetCharactersResponse {
  info: Info;
  results: Character[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export enum Gender {
  FEMALE = 'Female',
  MALE = 'Male',
  UNKNOWN = 'unknown'
}

export interface Location {
  name: string;
  url: string;
}

export enum Species {
  ALIEN = 'Alien',
  HUMAN = 'Human'
}

export enum Status {
  ALIVE = 'Alive',
  DEAD = 'Dead',
  UNKNOWN = 'unknown'
}
