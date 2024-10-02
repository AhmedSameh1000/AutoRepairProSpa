import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  SubjectEventForChangeLanguge = new Subject();
  constructor() {}
}
