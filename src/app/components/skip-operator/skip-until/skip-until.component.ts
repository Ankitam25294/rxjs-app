import { Component } from '@angular/core';
import { fromEvent, interval, of, skipUntil } from 'rxjs';

@Component({
  selector: 'app-skip-until',
  standalone: true,
  imports: [],
  templateUrl: './skip-until.component.html',
  styleUrl: './skip-until.component.scss'
})
export class SkipUntilComponent {

  numbers: number[] = [];

  startTimer() {
    // interval(1000)
    // .pipe(
    //   skipUntil(
    //     fromEvent(document.getElementById('skip-until')!, 'click')
    //   ))
    // .subscribe({
    //   next: (data: number)=> 
    //     {
    //       console.log(data);
    //       this.numbers.push(data);
    //     },
    //   error: (error)=> console.log(error),
    //   complete: ()=>  console.log('complete')
    // });
  }


  
}
