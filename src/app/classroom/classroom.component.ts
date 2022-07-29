import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {
  constructor(public fAuth: AngularFireAuth, private router: Router) { }
  photoUrl: any;
  ngOnInit(): void {
    // get the user.
    this.fAuth.user.subscribe(u => {
      this.photoUrl = u?.photoURL;
    });
    
  }

  logout() {
    this.fAuth.signOut();
    this.router.navigate(['auth']);
  }

}
