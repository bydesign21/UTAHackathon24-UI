import { Component } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [NzFormModule, NzButtonComponent],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss',
})
export class MusicComponent {}
