import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

declare var VideoSDK: any;

@Component({
  selector: 'app-videoroom',
  templateUrl: './videoroom.component.html',
  styleUrls: ['./videoroom.component.scss']
})
export class VideoroomComponent implements OnInit {
  constructor(private fAuth: AngularFireAuth, private router: Router,
    private db: AngularFireDatabase, private dataService: DataService, private apiCall:ApiService) {
    // Initialising VideoSDK...
    VideoSDK.config(environment.videoSDKTOKEN);
    console.log('Starting Video Meeting.');
    
  }

  photoUrl: any;
  meetingId: any;

  ngOnInit(): void {
    this.fAuth.user.subscribe(u => {
      this.photoUrl = u?.photoURL;
    });

    this.initMeeting();
  }

  initMeeting(): void {
    // TODO: Make meeting id api call -> https://docs.videosdk.live/api-reference/realtime-communication/create-room
    this.apiCall.createMeetingId()
    .subscribe((t: any) => {
      this.dataService.saveToken(t);
    });
    const id = this.dataService.getMeetingId();
    console.log('the meeting id: ' + id);
    
    VideoSDK.initMeeting({
      meetingId: 'id',
      name: this.dataService.getUser(),
    });
    
    
  }

  logout() {
    this.fAuth.user.subscribe(user => {
      this.db.list(`status/${user?.displayName}`).remove();
    });
    this.fAuth.signOut();
    this.router.navigate(['auth']);
  }

  goToClassroom(): void {
    this.router.navigate(['classroom']);
  }

}
