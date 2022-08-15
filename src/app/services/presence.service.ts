import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import * as firebase from 'firebase/app';
import { first, map, of, switchMap, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PresenceService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.updateOnUser().subscribe();
    this.updateOnDisconnect().subscribe();
  }

  getPresence(username: string) { // TODO: change status to online users & uid to be user.displayName?
    return this.db.object(`status/${username}`).valueChanges();
  }

  getUser() {
    return this.afAuth.authState.pipe(first());
  }

  async setPresence(status: string) {
    const user = await this.getUser();
    if(user) {
      user.subscribe(u => {
        return this.db.object(`status/${u?.displayName}`).update({status});
      });
    }
  }

  updateOnUser() {
    const connection = this.db.object('.info/connected').valueChanges().pipe(
      map(connected => connected ? 'online': 'offline')
    );

    return this.afAuth.authState.pipe(
      switchMap(user => user ? connection : of('offline')),
      tap(status => this.setPresence(status))
    );
  }

  async signOut() {
    await this.setPresence('offline');
    await this.afAuth.signOut();
  }

  // The user closes the application.
  updateOnDisconnect() {
    return this.afAuth.authState.pipe(
      tap(user => {
        if(user) {
          this.db.object(`status/${user.displayName}`).query.ref.onDisconnect()
          .update({
            status: 'offline'
          });
        }
      })
    );
  }





}
