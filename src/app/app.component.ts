import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean;
  isCollapsed = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.isAuthenticated = false;
  }

  public async ngOnInit(): Promise<any> {
    const success: boolean = await this.authService.isAuthenticated();
    this.isAuthenticated = success;
  }

  public async signOut(): Promise<any> {
    await this.authService.signout();
    this.router.navigate(['/auth/login']);
  }
}
