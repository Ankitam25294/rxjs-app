import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-cancel-observable',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cancel-observable.component.html',
  styleUrl: './cancel-observable.component.scss'
})
export class CancelObservableComponent {
  timerConsoleSubscription: Subscription;
  timerBrowserSubscription: Subscription;
  timers: number[] = [];

  constructor() {

  //  const newObs = interval(1000)

  //   this.timerSubscription = newObs.subscribe((data)=> {
  //     console.log(data);
  //   })

    const newTimerObs  = new Observable<number>((observer)=>{
      let i = 0;
      let interval = setInterval(()=> {
        console.log('setInterval executing')
        observer.next(i++);
      }, 1000);

      return () => {
        console.log('cleard setInterval')
        clearInterval(interval);
      }
    })

    this.timerConsoleSubscription = newTimerObs.subscribe((data)=> {
      console.log(data)
    })

    this.timerBrowserSubscription = newTimerObs.subscribe((data)=> {
      this.timers.push(data)
    })

    this.timerConsoleSubscription.add(this.timerBrowserSubscription)
  }

  cancelTimer() {
    console.log('stop timer')
    this.timerConsoleSubscription.unsubscribe();
    // this.timerBrowserSubscription.unsubscribe();
  }
}
