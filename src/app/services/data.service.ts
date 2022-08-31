import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: string = '';
  user: any = '';
  token: any = '';

  constructor() { }


  sendMeetingId(id: string) {
    this.data = id;
  }

  async getMeetingId  () {
    return await this.token.id;
  }

  getUser() {
    console.log(this.user);
    return this.user;
  }

  setUser(user: string) {
    this.user = user;
  }

  saveToken(token: string) {
    console.log('the token in data service --> ', token);
    this.token = token;
  }
}
