import { Injectable } from '@angular/core';
import { Content} from './helper-files/content-interface';
import { CONTENTLIST } from './helper-files/contentDb';;

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  constructor() { }

  createDb(): object {
    const tyler: Content[] = CONTENTLIST;
    return { tyler };
  }
  genId(tyler: Content[]): number{
    return tyler.length > 0 ?
      Math.max(...tyler.map(content => content.id)) + 1
      : 2000;
  }
}
