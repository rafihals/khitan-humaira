import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  private _isFormActive = new BehaviorSubject<boolean>(false);
  isFormActive$ = this._isFormActive.asObservable();

  setFormActive(isActive: boolean) {
    this._isFormActive.next(isActive);
  }
}
