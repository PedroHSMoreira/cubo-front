import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  notifier = new EventEmitter<any>()

  constructor() { }

  notify(message: string, type: string) {
    this.notifier.emit({message, type})
  }
}
