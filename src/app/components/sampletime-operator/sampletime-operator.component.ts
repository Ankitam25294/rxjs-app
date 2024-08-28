import { Component, OnInit } from '@angular/core';
import { fromEvent, sampleTime } from 'rxjs';

@Component({
  selector: 'app-sampletime-operator',
  standalone: true,
  imports: [],
  templateUrl: './sampletime-operator.component.html',
  styleUrl: './sampletime-operator.component.scss'
})
export class SampletimeOperatorComponent implements OnInit{
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let clicks = fromEvent(document, 'click');
    clicks.pipe(sampleTime(1000)).subscribe((data)=>{
      console.log(data);
    })

  }
}
