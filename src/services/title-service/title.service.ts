import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  isAppOpenedBefore = new Subject<boolean>();

  constructor() { }

  getActiveTitle() {
    return localStorage.getItem('title');
  }
}
