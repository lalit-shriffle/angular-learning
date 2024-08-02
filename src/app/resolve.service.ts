import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<any> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');
    console.log("iddd",id);
    return ["lalit","patidar"]
  }
}
