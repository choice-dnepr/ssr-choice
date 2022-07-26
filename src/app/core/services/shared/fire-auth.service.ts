import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';

@Injectable({
  providedIn: 'root',
})
export class FireAuthService {

  constructor(private readonly fireAuth: Auth) {}


  public signIn(email: string, password: string): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.fireAuth, email, password));
  }

  public signOut(): Observable<void> {
    return from(this.fireAuth.signOut());
  }
}