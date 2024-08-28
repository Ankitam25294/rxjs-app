import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-take-operator',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './take-operator.component.html',
  styleUrl: './take-operator.component.scss'
})
export class TakeOperatorComponent {
  lessons = [
    {  id:'1', routerLink: ['/take-operator/take'], text: 'take' },
    {  id:'2', routerLink: ['/take-operator/take-last'], text: 'take-last' },
    {  id:'3', routerLink: ['/take-operator/take-until'], text: 'take-until' },
    {  id:'4', routerLink: ['/take-operator/take-while'], text: 'take-while' },
  ];
}
