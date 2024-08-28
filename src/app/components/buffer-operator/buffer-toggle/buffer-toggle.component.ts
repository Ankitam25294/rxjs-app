import { Component } from '@angular/core';
import { bufferToggle, interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-toggle',
  standalone: true,
  imports: [],
  templateUrl: './buffer-toggle.component.html',
  styleUrl: './buffer-toggle.component.scss'
})
export class BufferToggleComponent {

  ngOnInit(): void {
    let opening = interval(500).pipe(tap((data)=> console.log('open')));
    let closing = () => interval(500).pipe(tap((data)=> console.log('close')));

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    interval(100)
    .pipe(
      bufferToggle(opening, closing),
      take(4)
    ).subscribe((data)=> {
      console.log(data)
    })
  }
}
