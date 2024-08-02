import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loginUser (email:string , password: string){
    if(email==="lalit" && password === "pass"){
      return true;
    }else{
      return false;
    }
  }

  constructor() { }
}
