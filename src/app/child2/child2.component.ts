import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FetchService } from '../fetch.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers: [AuthServiceService],
})
export class Child2Component {
  mySubject = new Subject<number>();

  constructor(
    authService: AuthServiceService,
    private fetchService: FetchService
  ) {
    const result: boolean = authService.loginUser('lalit', 'pass');
    console.log('component level DI ', result);

    const data = fetchService.getPosts().subscribe((data) => {
      console.log('data', data);
    });

    this.mySubject.next(22)

    this.mySubject.subscribe((value: number) => {
      console.log('value', value);
    });

    this.mySubject.next(11);
  }

  ngOnInit() {}
}
