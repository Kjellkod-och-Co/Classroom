import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
@Component({
  selector: 'app-authpage',
  templateUrl: './authpage.component.html',
  styleUrls: ['./authpage.component.scss']
})
export class AuthpageComponent implements OnInit {

  constructor(public fFauth: AngularFireAuth, public router: Router) { }

  ngOnInit(): void {
    this.fFauth.user.subscribe(e  => {
      console.log(e?.displayName);
      
    })
    
  }

  login() {
    this.fFauth.signInWithRedirect(new firebase.auth.GithubAuthProvider());    
  }

}
