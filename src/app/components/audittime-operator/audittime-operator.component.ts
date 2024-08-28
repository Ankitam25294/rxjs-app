import { Component, OnInit } from '@angular/core';
import { auditTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-audittime-operator',
  standalone: true,
  imports: [],
  templateUrl: './audittime-operator.component.html',
  styleUrl: './audittime-operator.component.scss'
})
export class AudittimeOperatorComponent implements OnInit {
  ngOnInit(): void {

    fromEvent(document, 'click').pipe(auditTime(5000)).subscribe(data => console.log(data));
  }
}
