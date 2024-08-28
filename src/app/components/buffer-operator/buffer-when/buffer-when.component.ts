import { Component, OnInit } from '@angular/core';
import { bufferWhen, interval, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-when',
  standalone: true,
  imports: [],
  templateUrl: './buffer-when.component.html',
  styleUrl: './buffer-when.component.scss'
})
export class BufferWhenComponent implements OnInit {

  
  ngOnInit() {
    let x = 0;
    interval(500)
    .pipe(
      tap((i)=> (x=i)),
      bufferWhen(()=> {
        if(x > 5) {
          return interval(1000);
        }
      return interval(2000)
    }))
    .subscribe(
      (data) => console.log(data)
    )

  }
}
