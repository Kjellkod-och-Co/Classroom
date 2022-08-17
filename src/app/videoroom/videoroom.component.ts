import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videoroom',
  templateUrl: './videoroom.component.html',
  styleUrls: ['./videoroom.component.scss']
})
export class VideoroomComponent implements OnInit {

  constructor(private fAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {}

  photoUrl: any;

  ngOnInit(): void {
    this.fAuth.user.subscribe(u => {
      this.photoUrl = u?.photoURL;
    });

    
  }

  logout() {
    this.fAuth.user.subscribe(user => {
      this.db.list(`status/${user?.displayName}`).remove();
    });
    this.fAuth.signOut();
    this.router.navigate(['auth']);
  }

}
