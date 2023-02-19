import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from '@abacritt/angularx-social-login';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  socialUser: SocialUser | undefined;
  userLogged: SocialUser | undefined;
  isLogeed: boolean | undefined;
  constructor(
    private authService: SocialAuthService,
    private router:Router
  ) { }
  ngOnInit(): void {
    this.authService.authState.subscribe(
      data => {
        this.userLogged = data;
        this.isLogeed = (this.userLogged != null);
      }
    )
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data => {
        this.userLogged = data;
        this.isLogeed = true
        this.router.navigate(['/dashboard']);
        console.log(data);

      }
    );
  }


  logOut(): void {
    this.authService.signOut();
  }
}
