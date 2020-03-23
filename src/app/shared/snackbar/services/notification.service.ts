import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifier = new EventEmitter()

  constructor() { }

  notify(message: string, type: string) {
    this.notifier.emit({ message, type })
  }
}
