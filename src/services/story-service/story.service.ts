import { Injectable } from '@angular/core';
import { Observable, of, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  isStoryVisible = new Subject<boolean>();

  storyData = new Subject<any[]>();

  constructor() { }

}
