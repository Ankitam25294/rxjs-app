import { Component, OnInit } from '@angular/core';
import { from, interval, of, take, takeLast } from 'rxjs';

@Component({
  selector: 'app-take-last',
  standalone: true,
  imports: [],
  templateUrl: './take-last.component.html',
  styleUrl: './take-last.component.scss'
})
export class TakeLastComponent implements OnInit{

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    interval(100).pipe(take(10), takeLast(5)).subscribe(data=> console.log(data));
    console.log('-----')
    of(1,2).pipe(takeLast(5)).subscribe(data=> console.log(data));
    from([11,21,31,41,51,61,71,81,91]).pipe(takeLast(5)).subscribe(data=> console.log(data));

  }
}
