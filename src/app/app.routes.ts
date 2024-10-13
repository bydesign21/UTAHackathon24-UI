import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { MusicComponent } from './components/dashboard/music/music.component';
import { PlaylistComponent } from './components/dashboard/playlist/playlist.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'auth/signup',
    component: SignUpComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'music',
    component: MusicComponent,
  },
  {
    path: 'playlist',
    component: PlaylistComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];
