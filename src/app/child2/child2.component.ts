import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers: [AuthServiceService]
})
export class Child2Component {
  constructor(authService: AuthServiceService){
    const result:boolean = authService.loginUser("lalit","pass");
    console.log("component level DI ",result);
  }
}
