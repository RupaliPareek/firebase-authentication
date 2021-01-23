import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: any = null;
  userName: string;
  password: string;
  constructor(private afa: AngularFireAuth, private router: Router) { 
    this.afa.authState.subscribe((auth => {
      this.authState = auth;
    }))
   }

   public async registerWithEmailId(registerValue): Promise<any>{
    console.log(registerValue);
    this.userName = registerValue.userName;
    this.password = registerValue.password;
    this.afa.createUserWithEmailAndPassword(this.userName, this.password).then((user) => {
      this.authState = user;
    }).catch(error => {
      console.log(error);
    })
   }

   public async loginWithEmail(loginValue): Promise<any>{
    this.userName = loginValue.userName;
    this.password = loginValue.password;
    this.afa.signInWithEmailAndPassword(this.userName, this.password).then((user) => {
      this.authState = user;
    }).catch(error => {
      console.log(error);
    })
   }
}
