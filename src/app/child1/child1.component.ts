import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  mYObservable = of(1, 2, 3, 4);
  constructor() {
  this.mYObservable.subscribe((data)=>{
      console.log(data);
    })
  }
}