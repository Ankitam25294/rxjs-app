import { Observable } from "rxjs";

//function can emit only 1 value
export function funcObs() {
    console.log('function');
    return 1;
    //can not return multiple values

    // return 2;
}


//observable can emit multiple values
export const funcObservable = new Observable((observer)=>{
    console.log('observable');
    observer.next(1);
    observer.next(2);

    //this will act as asynchronous programming
    setTimeout(()=> {
        observer.next(3);
    },2000);
})