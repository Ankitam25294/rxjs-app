import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-filter-operator',
  standalone: true,
  imports: [],
  templateUrl: './filter-operator.component.html',
  styleUrl: './filter-operator.component.scss'
})
export class FilterOperatorComponent implements OnInit, OnDestroy {
  eventSubscription!: Subscription;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    of(1,2,2,3,4,5,5,6,7,8).pipe(filter((x)=> x%2===1)).subscribe((data)=>{
      console.log(data);
    })

    this.eventSubscription = fromEvent(document, 'click').pipe(filter((eve: Event) => {
      return (eve?.target as HTMLElement).tagName === 'BUTTON'
    })).subscribe((data)=> {
      console.log(data)
    })

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.eventSubscription.unsubscribe();
  }
}
