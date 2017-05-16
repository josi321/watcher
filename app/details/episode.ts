// look at tvmaze api for episodes to see what kind of data we get

export interface Episodes {
  name: string;
  airstamp: string;
  season: number;
  number: number;
  summary?: string;
}
