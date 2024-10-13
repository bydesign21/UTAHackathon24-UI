import { Component, Input } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [NzFormModule, NzButtonComponent, FormsModule],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss',
})
export class PlaylistComponent {
  @Input('title')
  title: string = '';

  @Input('description')
  description: string = '';

  constructor() {}
}
