import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-buffer-operator',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './buffer-operator.component.html',
  styleUrl: './buffer-operator.component.scss'
})
export class BufferOperatorComponent {
   lessons = [
  {  id:'1', routerLink: ['/buffer-operator/buffer'], text: 'buffer' },
  {  id:'2', routerLink: ['/buffer-operator/buffer-count'], text: 'buffer-count' },
  {  id:'3', routerLink: ['/buffer-operator/buffer-time'], text: 'buffer-time' },
  {  id:'4', routerLink: ['/buffer-operator/buffer-toggle'], text: 'buffer-toggle' },
  {  id:'5', routerLink: ['/buffer-operator/buffer-when'], text: 'buffer-when' },
];
}
