import { Component } from '@angular/core';
import { from, of, skipWhile } from 'rxjs';

@Component({
  selector: 'app-skip-while',
  standalone: true,
  imports: [],
  templateUrl: './skip-while.component.html',
  styleUrl: './skip-while.component.scss'
})
export class SkipWhileComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // of(1,2,3,4,5)
    // .pipe(
    //   skipWhile(
    //     x => x < 3
    //   ))
    // .subscribe({
    //   next: (data: number)=> 
    //     {
    //       console.log(data);
    //     },
    //   error: (error)=> console.log(error),
    //   complete: ()=>  console.log('complete 1')
    // });


    // of(12,22,32,42,52, 12,22)
    // .pipe(
    //   skipWhile(
    //     x => x < 32
    //   ))
    // .subscribe({
    //   next: (data: number)=> 
    //     {
    //       console.log(data);
    //     },
    //   error: (error)=> console.log(error),
    //   complete: ()=>  console.log('complete 2')
    // });

    // of(11,22,33,44,55, 11,22)
    // .pipe(
    //   skipWhile(
    //     x => x < 0
    //   ))
    // .subscribe({
    //   next: (data: number)=> 
    //     {
    //       console.log(data);
    //     },
    //   error: (error)=> console.log(error),
    //   complete: ()=>  console.log('complete 3')
    // });

    // of(11,22,33,44,55, 11,22)
    // .pipe(
    //   skipWhile(
    //     x => x > 0
    //   ))
    // .subscribe({
    //   next: (data: number)=> 
    //     {
    //       console.log(data);
    //     },
    //   error: (error)=> console.log(error),
    //   complete: ()=>  console.log('complete 4')
    // });

    // of(11,22,33,44,55, 11,22)
    from([11, 22, 33, 44, 55, 11,22])
    .pipe(
      skipWhile(
        (x) => x !== 55
      ))
    .subscribe({
      next: (data: number)=> 
        {
          console.log(data);
        },
      error: (error)=> console.log(error),
      complete: ()=>  console.log('complete 5')
    });
  }
}
