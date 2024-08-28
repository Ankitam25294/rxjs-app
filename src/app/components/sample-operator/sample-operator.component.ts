import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, sample } from 'rxjs';

@Component({
  selector: 'app-sample-operator',
  standalone: true,
  imports: [],
  templateUrl: './sample-operator.component.html',
  styleUrl: './sample-operator.component.scss'
})
export class SampleOperatorComponent implements OnInit{
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let clicks = fromEvent(document, 'click');
    interval(1000).pipe(sample(clicks)).subscribe((data)=>{
      console.log(data);
    })

  }
}
