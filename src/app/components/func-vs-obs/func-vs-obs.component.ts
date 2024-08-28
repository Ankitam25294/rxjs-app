import { Component } from '@angular/core';
import { funcObs, funcObservable } from './FunVsObs';

@Component({
  selector: 'app-func-vs-obs',
  standalone: true,
  imports: [],
  templateUrl: './func-vs-obs.component.html',
  styleUrl: './func-vs-obs.component.scss'
})
export class FuncVsObsComponent {

  constructor() {
    console.log('before function');
    console.log(funcObs());
    console.log('after function');

    console.log('before observable');
    funcObservable.subscribe((data)=>{
      console.log(data);
    })
    funcObservable.subscribe((data)=>{
      console.log(data);
    })
    console.log('after observable');
  }
}
