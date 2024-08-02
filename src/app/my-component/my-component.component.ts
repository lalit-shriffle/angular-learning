import { Component } from '@angular/core';
import { ManualComponent } from '../manual-component/manual-component.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ManualComponent,RouterOutlet],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  my_item : string = "hello from parent"

}
