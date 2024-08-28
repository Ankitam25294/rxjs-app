import { Component, OnInit } from '@angular/core';
import { bufferCount, of } from 'rxjs';

@Component({
  selector: 'app-buffer-count',
  standalone: true,
  imports: [],
  templateUrl: './buffer-count.component.html',
  styleUrl: './buffer-count.component.scss'
})
export class BufferCountComponent implements OnInit{

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    of(1,2,3,4).pipe(bufferCount(3, 2)).subscribe((data)=> {
      console.log(data)
    })

    console.log('------')

    of(1,2,3,4).pipe(bufferCount(2)).subscribe((data)=> {
      console.log(data)
    })
  }
}
