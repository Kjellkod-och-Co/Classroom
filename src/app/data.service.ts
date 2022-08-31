import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: string = '';
  user: any = '';

  constructor() { }


  sendMeetingId(id: string) {
    this.data = id;
  }

  getMeetingId() {
    return this.data;
  }

  getUser() {
    console.log(this.user);
    return this.user;
  }

  setUser(user: string) {
    this.user = user;
  }
}
