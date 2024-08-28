import { Component, OnInit } from '@angular/core';
import { bufferTime, interval, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-time',
  standalone: true,
  imports: [],
  templateUrl: './buffer-time.component.html',
  styleUrl: './buffer-time.component.scss'
})
export class BufferTimeComponent implements OnInit {

  intervalData: number[] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // interval(0)
    // .pipe(tap((data)=> console.log(data)), bufferTime(2000))
    // .subscribe((data)=> {
    //   console.log(data);
    //   // this.intervalData.push(...data)
    // })
  }
}
