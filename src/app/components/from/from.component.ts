import { AfterViewInit, Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-from',
  standalone: true,
  imports: [],
  templateUrl: './from.component.html',
  styleUrl: './from.component.scss'
})
export class FromComponent implements AfterViewInit{
  postsArray =[
    { firstname: 'Ankita', lastname: 'Medhekar' },
    { firstname: 'Gauresh', lastname: 'Chaudhari' },
    { firstname: 'Sai', lastname: 'Medhekar' },
  ];

  postArrayObs$ = from(this.postsArray);
  promise = new Promise((resolve, reject)=> {
    setTimeout(()=>{
      resolve('Promise Resolved. Sending data !!')
    })
  })
  promiseObs$ = from(this.promise);
  constructor() {
    this.postArrayObs$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log('error=>', error),
      complete: ()=> console.log('array obs complete done')
    })

    this.promiseObs$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log('error=>', error),
      complete: ()=> console.log('promise obs complete done')
    })
  }

  ngAfterViewInit(): void {
     fromEvent(document.getElementById('click-button')!, 'click').subscribe({
        next: (data) => console.log(data),
        error: (error) => console.log('error=>', error),
        complete: ()=> console.log('event obs complete done')
     })
  }
}
