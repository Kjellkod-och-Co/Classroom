import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 
    console.log('Hello from API');
  }

  createMeetingId() {
    return this.http.post('https://api.videosdk.live/v2/rooms', {}, { headers: {"Authorization": environment.videoSDKTOKEN}});
  }
}
