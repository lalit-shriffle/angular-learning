import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-route',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-route.component.html',
  styleUrl: './dynamic-route.component.css'
})
export class DynamicRouteComponent {
  constructor(private route: ActivatedRoute) {
      this.route.params.subscribe((params)=>{
        console.log("params ",params["id"]);
      })
  }

  ngOnInit(){
    this.route.data.subscribe((resolve:any)=>{
      const data = resolve.resolvedData;
      console.log("data",data);
    })
  }
} 
