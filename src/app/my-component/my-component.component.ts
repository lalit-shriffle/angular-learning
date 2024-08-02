import { Component } from '@angular/core';
import { ManualComponent } from '../manual-component/manual-component.component';
import { RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ManualComponent,RouterOutlet],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  my_item : string = "hello from parent"
  email = "lalit";
  password = "pss"
  constructor(authService: AuthServiceService){
    const result =  authService.loginUser(this.email,this.password);
    console.log("isUser authenticated",result);
  }

}
