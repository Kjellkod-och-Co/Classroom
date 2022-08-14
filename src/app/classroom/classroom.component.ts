import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {
  constructor(public fAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) { }
  photoUrl: any;
  users: any;
  ngOnInit(): void {
    // get the user.
    const userRef = this.db.object('online-users');
    this.fAuth.user.subscribe(u => {
      userRef.update({user: u?.displayName});
      this.photoUrl = u?.photoURL;
    });
    this.getOnlineUsers();
  }

  logout() {
    this.fAuth.signOut();
    this.router.navigate(['auth']);
  }

  getOnlineUsers() {
    this.db.list('online-users').valueChanges().subscribe((users: any) => {
      this.users = users;
    });
    
  }

}
