import { Component, OnInit } from '@angular/core'
import { Logout } from 'src/app/auth/auth.action'
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;
  public isCollapsed = true;

  constructor(private store: Store<any>, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthenticated().subscribe(state => {
      this.isAuthenticated = state.isAuthenticated
    })
  }

  onClickLogout() {
    this.store.dispatch(new Logout())
    this.router.navigate(["/"])
  }
}