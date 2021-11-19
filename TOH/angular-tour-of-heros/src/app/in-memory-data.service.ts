import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, ranking: 1, name: 'Monkey D. Luffy' },
      { id: 12, ranking: 2, name: 'Narco' },
      { id: 13, ranking: 3, name: 'Bombasta' },
      { id: 14, ranking: 4, name: 'Celeritas' },
      { id: 15, ranking: 5, name: 'Magenta' },
      { id: 16, ranking: 6, name: 'RubberMan' },
      { id: 17, ranking: 7, name: 'Dynama' },
      { id: 18, ranking: 8, name: 'Dr IQ' },
      { id: 19, ranking: 9, name: 'Dr Nice' },
      { id: 20, ranking: 10, name: 'Tornado' },
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  
}
