import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-skip-operator',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './skip-operator.component.html',
  styleUrl: './skip-operator.component.scss'
})
export class SkipOperatorComponent {
  lessons = [
    {  id:'1', routerLink: ['/skip-operator/skip'], text: 'skip' },
    {  id:'2', routerLink: ['/skip-operator/skip-last'], text: 'skip-last' },
    {  id:'3', routerLink: ['/skip-operator/skip-until'], text: 'skip-until' },
    {  id:'4', routerLink: ['/skip-operator/skip-while'], text: 'skip-while' },
  ];
}
