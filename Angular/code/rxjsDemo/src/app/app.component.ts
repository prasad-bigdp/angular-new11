import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { of,from } from 'rxjs';
import { mergeMap } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rxjsDemo';
  myObs; myObs2;
  constructor() {
    this.myObs = new Observable((sub) => {
      sub.next(1);
      sub.next(2);
      sub.next(3);
      sub.next(4);
      sub.complete();
      sub.next(5)
    })
    this.myObs.subscribe({
      next(v) { console.log(v) },
      error(e) { console.log(e) },
      complete(){console.log("all are over")}
      
    })
    of("hello", "world").pipe(mergeMap(v => of(`${v}`))).subscribe((x) => console.log(x))
    this.myObs2 = from([ 5, 6, 7 ])
  }

}