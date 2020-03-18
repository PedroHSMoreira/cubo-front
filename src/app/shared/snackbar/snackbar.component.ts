import { Component, OnInit, Input } from '@angular/core';
import { SnackbarService } from './services/snackbar.service';
import { tap, switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'ha-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({ opacity: 0, bottom: 0 })),
      state('visible', style({ opacity: 1, bottom: '30px' })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

@Input() message: string
classAlert: string
snackVisibility: string = 'hidden'

  constructor(private sb: SnackbarService) { }

  ngOnInit() {
    this.sb.notifier.pipe(
      tap(data => {
        this.message = data.message
        this.classAlert =  data.type
        this.snackVisibility = 'visible'
      }),
      switchMap(data => timer(3000))
    ).subscribe(timer => this.snackVisibility = 'hidden')
  }

  hasSuccess(): boolean {
    return true
  }
}
