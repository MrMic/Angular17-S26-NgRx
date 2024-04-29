import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  count$: Observable<number>;

  // NOTE: The `store` is injected in the constructor
  // NOTE: and the value is defined in app.module.ts
  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select('counter');
  }
}
