import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { PresenceService } from '../services/presence.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {
  constructor(public fAuth: AngularFireAuth, private router: Router,
    private db: AngularFireDatabase, public presence: PresenceService, private DataService: DataService) {}

  // *** main variables.
  presence$:any;

  // *** testing ends here


  photoUrl: any;
  users: any;
  uid: any;

  ngOnInit(): void {
    // get the user.
    const userRef = this.db.object('online-users'); // ? is this line redundant now?
    this.fAuth.user.subscribe((u: any) => {
      this.presence$ = this.presence.getPresence(u?.displayName!);
      this.uid = u?.uid;
      userRef.update({user: u?.displayName}); // ? is userRef even needed when line 27 does it wtih the service?
      this.photoUrl = u?.photoURL;
      this.DataService.setUser(u?.displayName);
    });

    this.getOnlineUsers();

  }

  logout() {
    this.fAuth.user.subscribe(user => {
      this.db.list(`status/${user?.displayName}`).remove();
    });
    this.fAuth.signOut();
    this.router.navigate(['auth']);
  }

  getOnlineUsers() {
    this.db.list('status').snapshotChanges().subscribe((users: any) => {
      this.users = users;
    });
  }

  goToVideoRoom(roomId: any) {
    this.DataService.sendMeetingId(roomId);
    this.router.navigate(['video-room/' + roomId]);
  }

}
