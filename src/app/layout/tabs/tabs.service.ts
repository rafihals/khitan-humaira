import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  private formActiveSubject = new BehaviorSubject<boolean>(false);
  formActive$ = this.formActiveSubject.asObservable();

  setFormActive(isActive: boolean) {
    this.formActiveSubject.next(isActive);
  }
}
