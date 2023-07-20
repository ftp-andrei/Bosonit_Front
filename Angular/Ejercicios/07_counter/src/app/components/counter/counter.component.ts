import { Component, OnInit } from '@angular/core';
import {
  fromEvent,
  interval,
  Observable,
  scan,
  switchMap,
  tap,
  Subject,
  map,
  merge,
  takeUntil,
} from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counter: number = 0;
  direction: boolean = true;
  inicio: boolean = false;
  pauseDetector: Subject<any> = new Subject();
  start: Observable<any> = new Observable();
  pause: Observable<any> = new Observable();
  reset: Observable<any> = new Observable();
  countU: Observable<any> = new Observable();
  countD: Observable<any> = new Observable();

  form: FormGroup = this.fb.group({
    stepTo: [0],
    step: [1],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Btn Start
    this.start = fromEvent<MouseEvent>(
      document.getElementById('start') as HTMLButtonElement,
      'click'
    ).pipe(
      tap(() => (this.inicio = true)),
      switchMap(() => (this.direction ? this.countUp() : this.countDown()))
    );
    // Btn Pause
    this.pause = fromEvent<MouseEvent>(
      document.getElementById('pause') as HTMLButtonElement,
      'click'
    ).pipe(
      tap(() => {
        this.inicio = false;
        this.pauseDetector.next('');
      }),
      map(() => this.counter)
    );
    // Btn Reset
    this.reset = fromEvent<MouseEvent>(
      document.getElementById('reset') as HTMLButtonElement,
      'click'
    ).pipe(map(() => this.form.value['stepTo']));
    // Btn CountUp
    this.countU = fromEvent<MouseEvent>(
      document.getElementById('countUp') as HTMLButtonElement,
      'click'
    ).pipe(
      tap(() => {
        if (this.inicio) {
          this.pauseDetector.next('');
        }
        this.direction = true;
      }),
      map(() => this.counter),
      switchMap(() => (this.inicio ? this.countUp() : ''))
    );
    // Btn CountDown
    this.countD = fromEvent<MouseEvent>(
      document.getElementById('countDown') as HTMLButtonElement,
      'click'
    ).pipe(
      tap(() => {
        if (this.inicio) {
          this.pauseDetector.next('');
        }
        this.direction = false;
      }),
      map(() => this.counter),
      switchMap(() => (this.inicio ? this.countDown() : ''))
    );

    merge(
      this.start,
      this.pause,
      this.reset,
      this.countU,
      this.countD
    ).subscribe((n) => (this.counter = n));
  }
  // Contador
  countUp() {
    return interval(1000).pipe(
      scan(() => this.counter + this.form.value['step'], this.counter),
      takeUntil(this.pauseDetector)
    );
  }

  countDown() {
    return interval(1000).pipe(
      scan(() => this.counter - this.form.value['step'], this.counter),
      takeUntil(this.pauseDetector)
    );
  }
}
