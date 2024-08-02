import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { ManualComponent } from './manual-component/manual-component.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyComponentComponent,ManualComponent,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-app';
  myName = "";
  counts = 0;
  isActive = true;
  showCounts=false
  items:number[] = [1,2,3,4]

  @ViewChild("counts")
  countElement: ElementRef;

  // @HostListener("click",['$event.target'])
  // onClick(btn:MouseEvent){
  //   console.log("button",btn);
  // }

  ngAfterViewInit(){
    console.log(this.countElement);
  }
  handleClick(event:any,hello:string){
    console.log(event,hello);
    this.counts += 1;
  }
}
