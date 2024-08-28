import { Component, OnInit } from '@angular/core';
import { of, skipLast } from 'rxjs';

@Component({
  selector: 'app-skip-last',
  standalone: true,
  imports: [],
  templateUrl: './skip-last.component.html',
  styleUrl: './skip-last.component.scss'
})
export class SkipLastComponent implements OnInit{

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.

    of(1,2,3,4,5).pipe(skipLast(10))
    .subscribe({
      next: (data)=> console.log(data),
      error: (error)=> console.log(error),
      complete: ()=>  console.log('complete')
    });

    //Add 'implements OnInit' to the class.
    of(1,2,3,4,5).pipe(skipLast(2))
    .subscribe({
      next: (data)=> console.log(data),
      error: (error)=> console.log(error),
      complete: ()=>  console.log('complete')
    });
  }
}
