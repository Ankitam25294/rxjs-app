import { Component } from '@angular/core';
import { distinctUntilKeyChanged, from } from 'rxjs';

@Component({
  selector: 'app-distinct-until-key-changed',
  standalone: true,
  imports: [],
  templateUrl: './distinct-until-key-changed.component.html',
  styleUrl: './distinct-until-key-changed.component.scss'
})
export class DistinctUntilKeyChangedComponent {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let employee = [
      {id: 1, name: 'Ankita'},
      {id: 2, name: 'Sajel'},
      {id: 3, name: 'Shirin'},
      {id: 4, name: 'Ankita'},
      {id: 5, name: 'Ankita1'},
      {id: 6, name: 'Ankita2'},
      {id: 7, name: 'Ankita3'},
      {id: 8, name: 'Ankita4'},
    ]
  
    // from(employee
    // ).pipe(distinctUntilKeyChanged(('name'))).subscribe((data)=>{
    //   console.log(data);
    // })
  
    from(employee
    ).pipe(distinctUntilKeyChanged('name', (prev, curr)=> {
      return prev.substring(0,4) === curr.substring(0,4)
    })).subscribe((data)=>{
      console.log(data);
    })
  }
}
