import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, buffer, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-buffer',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './buffer.component.html',
  styleUrl: './buffer.component.scss'
})
export class BufferComponent {
  showData$!: Observable<Event>;
  intervalData: number[] = [];
  
  ngAfterViewInit() {
    this.showData$ = fromEvent(document.getElementById('showButton')!, 'click' )
  }

  startInterval() {
    interval(1000)
    .pipe(buffer(this.showData$))
    .subscribe((data: number[])=> {
      console.log(data)
      this.intervalData.push(...data)
    })
  }
}
