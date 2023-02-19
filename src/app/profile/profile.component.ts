import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userLogged: SocialUser | undefined;
  isLogeed: boolean | undefined;
  constructor(
    private authService: SocialAuthService,
    private router: Router


  ) { }
  ngOnInit(): void {
    this.authService.authState.subscribe(
      data => {
        this.userLogged = data;
        this.isLogeed = (this.userLogged != null);
      }
    )
  }
  logOut(): void {
    this.authService.signOut();
    this.router.navigateByUrl('');
  }
}
