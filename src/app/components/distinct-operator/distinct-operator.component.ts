import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-distinct-operator',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './distinct-operator.component.html',
  styleUrl: './distinct-operator.component.scss'
})
export class DistinctOperatorComponent {
  lessons = [
    {  id:'1', routerLink: ['/distinct-operator/distinct'], text: 'distinct' },
    {  id:'2', routerLink: ['/distinct-operator/distinct-until-changed'], text: 'distinct-until-changed' },
    {  id:'3', routerLink: ['/distinct-operator/distinct-until-key-changed'], text: 'distinct-until-key-changed' },
  ];
}
