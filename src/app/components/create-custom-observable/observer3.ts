import { Observer } from "rxjs";

export class Observer3 implements Observer<number> {
    next(data: number) {
        console.log('3.' + data)
    }

    error(err: string) {
        console.log('error from observer3 class')
    }

    complete() {
        console.log('complete from observer3 class')
    }
}