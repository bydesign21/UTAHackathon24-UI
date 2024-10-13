import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { awsmobile } from '../aws-exports';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private authSubject: BehaviorSubject<any>;
  constructor() {
    Auth.configure(awsmobile);

    this.authSubject = new BehaviorSubject<boolean>(false);
  }

  public async login(email: string, password: string) {
    console.log('Login routes');

    try {
      const user = await Auth.signIn(email, password)
        .then(() => {
          this.authSubject.next(true);
          console.log('Correct!', user);
        })
        .catch((err) => {
          throw new Error(
            'Incorrect email or password for this account!!!',
            err
          );
        });
    } catch (err) {
      console.error('Error', err);
    }
  }

  public async signup(email: string, password: string): Promise<any> {
    try {
      const user = await Auth.signUp(email, password);
      console.log('Successfully signing up', user);
    } catch (err) {
      console.error('Error in signing up', err);
    }
  }

  public async signout(): Promise<any> {
    try {
      await Auth.signOut().then(() => {
        this.authSubject.next(false);
      });
      console.log('Sign out');
    } catch (err) {
      console.error('Error in signing out', err);
    }
  }

  public async isAuthenticated(): Promise<boolean> {
    if (this.authSubject.value) {
      return Promise.resolve(true);
    } else {
      return this.getUser()
        .then((user: any) => {
          if (user) {
            return true;
          } else {
            return false;
          }
        })
        .catch(() => {
          return false;
        });
    }
  }

  public async getUser(): Promise<any> {
    try {
      const user = await Auth.currentUserInfo();
      if (user) {
        return null;
      }
      return user;
    } catch (err) {
      console.error(err);
    }
  }
}
