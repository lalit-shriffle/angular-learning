import { AfterViewInit, Component } from '@angular/core';
import { fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component implements AfterViewInit {
  
  mYObservable = of(1, 2, 3, 4);
  constructor() {
  this.mYObservable.subscribe((data)=>{
      console.log(data);
    })
  }

 ngAfterViewInit(): void {
   const button = document.querySelector("#myBtn") as HTMLElement;
   const myObservable = fromEvent(button, "click");
   myObservable.subscribe((data:Event)=>{
    console.log("click",data);
   })
 }

}