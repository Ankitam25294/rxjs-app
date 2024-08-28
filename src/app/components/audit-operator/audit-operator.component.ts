import { Component, OnInit } from '@angular/core';
import { audit, interval } from 'rxjs';

@Component({
  selector: 'app-audit-operator',
  standalone: true,
  imports: [],
  templateUrl: './audit-operator.component.html',
  styleUrl: './audit-operator.component.scss'
})
export class AuditOperatorComponent implements OnInit{
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    interval(1000).pipe(audit(ev=> interval(2000))).subscribe(data => console.log(data));

    //output: 2,5,8

    //0 -> audit-> interval(2 sec) -> 2
    //3 -> audit-> interval(2 sec) -> 5
    //6 -> audit-> interval(2 sec) -> 8

  }
}
