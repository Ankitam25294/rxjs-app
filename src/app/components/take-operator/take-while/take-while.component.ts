import { Component } from '@angular/core';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while',
  standalone: true,
  imports: [],
  templateUrl: './take-while.component.html',
  styleUrl: './take-while.component.scss'
})
export class TakeWhileComponent {

    ngOnInit() {
      interval(100).pipe(takeWhile((x)=> x < 20, true)).subscribe({
        next: (data)=> console.log(data),
        error: (error)=> console.log(error),
        complete: () => console.log('complete')
      })
    }
}
