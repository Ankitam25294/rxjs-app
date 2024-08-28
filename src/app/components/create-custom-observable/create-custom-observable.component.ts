import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer3 } from './observer3';

@Component({
  selector: 'app-create-custom-observable',
  standalone: true,
  imports: [],
  templateUrl: './create-custom-observable.component.html',
  styleUrl: './create-custom-observable.component.scss'
})
export class CreateCustomObservableComponent {
  constructor() {
  const newObs = new Observable<number>((observer) => {
    for(let i=0;i<5;i++) {
      if(i==4) {
        observer.error('error from observer')
      }
      observer.next(i);

    }
    observer.complete();
  })

    // 1. way of subscribing to any observable  
    let observer1 = {
      next: (data: number) => console.log('1.' + data),
      error: (error: string) => console.log(error + '1'),
      complete: () => console.log('complete from obs1')
    }

    newObs.subscribe(observer1);

    // 2. way of subscribing to any observable  

    newObs.subscribe( 
      (data: number) => console.log('2.' + data),
      (error: string) => console.log(error + '2'),
      () => console.log('complete from obs1')
    );

    // 3. way of subscribing to any observable  

    newObs.subscribe(new Observer3());
  }
}
