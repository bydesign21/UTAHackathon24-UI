import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { MatCardModule } from '@angular/material/card';

export interface IUser {
  email: string;
  password: string;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [NzButtonComponent, NzFormModule, NzCardComponent, MatCardModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit {
  user: IUser;
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.user = {} as IUser;
  }

  public ngOnInit(): void {
    this.authService.getUser().then((currentUser: any) => {
      this.user = currentUser.attributes;
    });
  }

  public signout(): void {
    this.authService.signout().then(() => {
      this.router.navigate(['/signIn']);
    });
  }
}
