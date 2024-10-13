import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [NzFormModule, NzButtonComponent, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  @Input('email')
  email: string = '';

  @Input('password')
  password: string = '';
  constructor(private authService: AuthenticationService) {}

  public async signup() {
    return await this.authService.signup(this.email, this.password);
  }
}
