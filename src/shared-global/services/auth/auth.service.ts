import { Injectable } from '@angular/core';
import { signIn, signUp } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ConstantsCommon } from 'src/shared-global/common/constant.common';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public user: SocialUser;
  public loggedIn: boolean;
  public token: string = "";
  public userId: string = "";
  public isAuth$ = new BehaviorSubject<boolean>(false);
  public authChanged = this.isAuth$.asObservable();
  private readonly API_USER_SIGNUP_URL: string = ConstantsCommon.API_USER_SIGNUP_URL;
  private readonly API_USER_SIGNIN_URL: string = ConstantsCommon.API_USER_SIGNIN_URL;

  constructor(private httpClient: HttpClient, 
              private authService: SocialAuthService, 
              private router: Router) { 
    this.signInUser();
  }

  public createUser(userData: signUp) {
    console.log(userData)
    return this.httpClient.post(this.API_USER_SIGNUP_URL, userData, {
      observe: 'body'
    })
  
  }

  public loginUser(userData: signIn) {
    console.log(userData)
    return this.httpClient.post(this.API_USER_SIGNIN_URL, userData, {
      observe: 'body'
    }).subscribe((res: any) => {
       this.userId = res.uid;
       this.token = res.token;
       this.isAuth$.next(true);
       this.router.navigate(['/Personnages']);
    })
  }

  public signInUser() {
   this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
    });
  }

  public logout() {
    this.isAuth$.next(false);
    this.userId = null;
    this.token = null;
  }
}
