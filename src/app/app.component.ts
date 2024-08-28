import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjs-app';

  lessons = [
    {  id:'1', routerLink: ['/from'], text: 'From' },
    {  id:'2', routerLink: ['/custom-observable'], text: `custom-observable` },
    {  id:'3', routerLink: ['/function-vs-observable'], text: `function-vs-observable` },
    {  id:'4', routerLink: ['/cancel-observable'], text: `cancel-observable` },
    {  id:'5', routerLink: ['/operator-basics'], text: `operator-basics` },
    {  id:'6', routerLink: ['/buffer-operator'], text: 'buffer-operator' },
    {  id:'7', routerLink: ['/take-operator'], text: 'take-operator' },
    {  id:'8', routerLink: ['/skip-operator'], text: 'skip-operator' },
    {  id:'9', routerLink: ['/distinct-operator'], text: 'distinct-operator' },
    {  id:'10', routerLink: ['/filter-operator'], text: 'filter-operator' },
    {  id:'11', routerLink: ['/sample-operator'], text: 'sample-operator' },
    {  id:'12', routerLink: ['/sampletime-operator'], text: 'sampletime-operator' },
    {  id:'13', routerLink: ['/audit-operator'], text: 'audit-operator' },
    {  id:'14', routerLink: ['/audittime-operator'], text: 'audittime-operator' },
    {  id:'15', routerLink: ['/throttle-operator'], text: 'throttle-operator' },
    {  id:'16', routerLink: ['/throttletime-operator'], text: 'throttletime-operator' },

  ];
}
