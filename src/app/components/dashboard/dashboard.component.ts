import { Component } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NzFormModule, NzButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})


export class DashboardComponent {

}
