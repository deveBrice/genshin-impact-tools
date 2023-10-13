import { Injectable } from '@angular/core';
import { SignIn, SignUp } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ConstantsCommon } from 'src/shared-global/common/constant.common';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public loggedIn: boolean;
  public token: string = "";
  public userId: string = "";
  public pseudo: string = "";
  public isAuth$ = new BehaviorSubject<boolean>(false);
  public authChanged = this.isAuth$.asObservable();
  private readonly API_USER_SIGNUP_URL: string = ConstantsCommon.API_USER_SIGNUP_URL;
  private readonly API_USER_SIGNIN_URL: string = ConstantsCommon.API_USER_SIGNIN_URL;

  constructor(private httpClient: HttpClient, 
              private router: Router) { 
  }

  public createUser(userData: SignUp) {
    console.log(userData)
    return this.httpClient.post(this.API_USER_SIGNUP_URL, userData, {
      observe: 'body'
    })
  
  }

  public loginUser(userData: SignIn) {
    console.log(userData)
    return this.httpClient.post(this.API_USER_SIGNIN_URL, userData, {
      observe: 'body'
    }).subscribe((data: any) => {
       this.userId = data.userId;
       this.token = data.token;
       this.pseudo = data.pseudo;
       this.isAuth$.next(true);
       this.router.navigate(['/Personnages']);
    })
  }


  public logout() {
    this.isAuth$.next(false);
    this.userId = null;
    this.token = null;
  }
}
