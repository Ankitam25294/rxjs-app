import { Component, OnInit } from '@angular/core';
import { interval, of, skip, take } from 'rxjs';

@Component({
  selector: 'app-skip',
  standalone: true,
  imports: [],
  templateUrl: './skip.component.html',
  styleUrl: './skip.component.scss'
})
export class SkipComponent implements OnInit {

  ngOnInit() {
    interval(1000).pipe(skip(10), take(10))
    .subscribe({
      next: (data)=> console.log(data),
      error: (error)=> console.log(error),
      complete: ()=>  console.log('complete')
    });

    of(1,2,3,4).pipe(skip(10))
    .subscribe({
      next: (data)=> console.log(data),
      error: (error)=> console.log(error),
      complete: ()=>  console.log('complete')
    });
  }
}
