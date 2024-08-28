import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, throttle } from 'rxjs';

@Component({
  selector: 'app-throttle',
  standalone: true,
  imports: [],
  templateUrl: './throttle.component.html',
  styleUrl: './throttle.component.scss'
})
export class ThrottleComponent implements OnInit {
  ngOnInit(): void {
    // interval(1000).pipe(throttle(ev=> interval(2000), {leading: true, trailing: true})).subscribe(data => console.log(data));
    
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(throttle(() => interval(5000)));

    result.subscribe(x => console.log(x));
  }
}
