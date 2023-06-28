import { SocialAuthService } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login";
import { Component, OnInit } from '@angular/core';
//import { AuthService } from 'src/shared-global/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: SocialUser //= this.authService.user;
  loggedIn: boolean //= this.authService.loggedIn;

  constructor(/*private authService: AuthService*/ private authService: SocialAuthService) { }

  ngOnInit() {
      this.signInUser();
  }
  
  
  public signInUser() {
    this.authService.authState.subscribe((user) => {
       this.user = user;
       this.loggedIn = (user != null);
       console.log(this.user)
     });
   }
}
