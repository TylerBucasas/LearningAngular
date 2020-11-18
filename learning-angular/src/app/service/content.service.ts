import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { CONTENTLIST } from '../helper-files/contentDb';
import {Observable, of} from 'rxjs';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }

  getContent(): Content[]{
    return CONTENTLIST
  }

  getContentObs(): Observable<Content[]>{ //asynchronous
    this.messageService.add('ContentService: fetched content');
    return of(CONTENTLIST);
  }

  
}
