import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component implements AfterViewInit {

  myBehaviorSusbject = new BehaviorSubject<number>(0);
  
  mYObservable = of(1, 2, 3, 4);
  constructor() {
  this.mYObservable.subscribe((data)=>{
      console.log(data);
    })


    this.myBehaviorSusbject.subscribe(value=>{
      console.log("value",value);
    })

    this.myBehaviorSusbject.next(1);

    this.myBehaviorSusbject.subscribe(value=>{
      console.log("value",value);
    })

    this.myBehaviorSusbject.next(2)

  }

 ngAfterViewInit(): void {
   const button = document.querySelector("#myBtn") as HTMLElement;
   const myObservable = fromEvent(button, "click");
   myObservable.subscribe((data:Event)=>{
    console.log("click",data);
   })
 }

 
 
 

}