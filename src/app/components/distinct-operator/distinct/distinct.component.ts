import { Component } from '@angular/core';
import { distinct, from, of } from 'rxjs';

@Component({
  selector: 'app-distinct',
  standalone: true,
  imports: [],
  templateUrl: './distinct.component.html',
  styleUrl: './distinct.component.scss'
})
export class DistinctComponent {
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  of(1,2,2,3,4,5,5,6,7,8).pipe(distinct()).subscribe((data)=>{
    console.log(data);
  })

  of({age: 10, name: 'Bar'},
    {age: 20, name: 'Bar'},
    {age: 30, name: 'Foo'},
).pipe(distinct(({name})=>name)).subscribe((data)=>{
    console.log(data);
  })
  from([{age: 10, name: 'Bar2'},
    {age: 20, name: 'Bar2'},
    {age: 30, name: 'Foo2'},
]).pipe(distinct((x)=>x.name)).subscribe((data)=>{
    console.log(data);
  })
 }
}
