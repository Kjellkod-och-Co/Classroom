import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthpageComponent } from './authpage/authpage.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { VideoroomComponent } from './videoroom/videoroom.component';


const goToClassroom = () => redirectLoggedInTo(['classroom']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);

const routes: Routes = [
  { path: 'auth', component: AuthpageComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: goToClassroom}},
  {
    path: 'classroom', component: ClassroomComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin}
  },
  { path: 'video-room/:meetingId', component: VideoroomComponent},
  { path: '', redirectTo:'/auth', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
