import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: string = '';
  user: any = '';
  token: any = '';

  constructor(private afAuth: AngularFireAuth) { }


  sendMeetingId(id: string) {
    this.data = id;
  }

  getMeetingId  () {
    const token = localStorage.getItem('t_k_n');
    console.log('the token in data service --> ', token);
    return token;
  }

  getUser() {
    this.afAuth.authState.subscribe(leUser => {
      leUser = this.user;
      return this.user;
    });
    
    console.log('user', this.user);
    
  }

  setUser(user: string) {
    this.user = user;
  }

  saveToken(token: string) {
    this.token = token;

    // Save to application
    localStorage.setItem('t_k_n', this.token.id);
  }
}
