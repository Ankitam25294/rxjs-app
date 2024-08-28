import { Component, OnInit } from '@angular/core';
import { Subscription, filter, interval, of } from 'rxjs';

@Component({
  selector: 'app-operator-basics',
  standalone: true,
  imports: [],
  templateUrl: './operator-basics.component.html',
  styleUrl: './operator-basics.component.scss'
})
export class OperatorBasicsComponent implements OnInit {

  timerSubscription: Subscription;
  constructor() {
    const newObs = interval(1000);
    this.timerSubscription = newObs.pipe(filter((data)=> data % 2 === 0)).subscribe((data)=> {
      console.log(data);
    })
  }
  ngOnInit(): void {
    // const newObs = of(1,2,3,4,5);
    // newObs.subscribe((data)=> {
    //   if(data % 2 === 0) {
    //     console.log(data);
    //   }
    // })


  }
  cancelInterval() {
    this.timerSubscription.unsubscribe();
  }
}
