import { Component } from '@angular/core';
import { fromEvent, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until',
  standalone: true,
  imports: [],
  templateUrl: './take-until.component.html',
  styleUrl: './take-until.component.scss'
})
export class TakeUntilComponent {

  startTimer() {
    interval(100).pipe(takeUntil(fromEvent(document.getElementById('take-until')!, 'click')))
    .subscribe({
      next: (data)=> console.log(data),
      error: (error)=> console.log(error),
      complete: ()=>  console.log('complete')
    });
  }

}
