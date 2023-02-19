import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userLogged: SocialUser | undefined;
  isLogeed: boolean | undefined;
  constructor(
    private authService: SocialAuthService,
    private router: Router


  ) { }
  ngOnInit(): void {
    this.authService.authState.subscribe(
      data => {
        console.log(data);

        this.userLogged = data;
        this.isLogeed = (this.userLogged != null);


      }
    )
  }
  logOut(): void {
    this.authService.signOut();
    this.router.navigateByUrl('/login');
  }
}
