import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzFormModule, NzButtonComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @Input('email')
  email: string = '';

  @Input('password')
  password: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  public async login() {
    try {
      const result = await this.authService
        .login(this.email, this.password)
        .then(() => {
          this.router.navigate(['/profile']);
        });
      return result;
    } catch (err) {
      console.error('error');
    }
  }
}
