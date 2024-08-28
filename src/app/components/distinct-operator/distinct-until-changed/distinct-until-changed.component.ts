import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, from, of } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  standalone: true,
  imports: [],
  templateUrl: './distinct-until-changed.component.html',
  styleUrl: './distinct-until-changed.component.scss'
})
export class DistinctUntilChangedComponent implements OnInit{

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // of(1,2,2,3,4,5,1,2,3,4).pipe(distinctUntilChanged()).subscribe((data)=>{
    //   console.log(data);
    // })

    of(1,2,3,4,5).pipe(distinctUntilChanged((prev, curr)=> {
      return curr === prev + 1
     })).subscribe((data)=>{
      console.log(data);
    })

    
    // let emp ={id: 1, name: 'Ankita'};
    // let employee = [
    //   emp, 
    //   emp,
    //   {id: 3, name: 'Shirin'},
    //   {id: 4, name: 'Ankita'}
    // ]
  
    // from(employee
    // ).pipe(distinctUntilChanged()).subscribe((data)=>{
    //   console.log(data);
    // })

    let employee = [
      {id: 1, name: 'Ankita'},
      {id: 2, name: 'Sajel'},
      {id: 3, name: 'Shirin'},
      {id: 4, name: 'Ankita'},
      {id: 5, name: 'Ankita'}
    ]
  
    from(employee
    ).pipe(distinctUntilChanged((prev, curr)=> {
      return prev.name === curr.name
    })).subscribe((data)=>{
      console.log(data);
    })
  }
}
