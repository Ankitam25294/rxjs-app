import { Component, OnInit } from '@angular/core';
import { interval, of, take } from 'rxjs';

@Component({
  selector: 'app-take',
  standalone: true,
  imports: [],
  templateUrl: './take.component.html',
  styleUrl: './take.component.scss'
})
export class TakeComponent implements OnInit {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    interval(100).pipe(take(5)).subscribe(data=> console.log(data));
    console.log('-----')
    of(1,2).pipe(take(5)).subscribe(data=> console.log(data));
  }
}
