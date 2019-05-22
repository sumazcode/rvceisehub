import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'events-list', pathMatch: 'full'},
  { path: 'events-list', loadChildren: './events-list/events-list.module#EventsListPageModule' },
  { path: 'events-form', loadChildren: './events-form/events-form.module#EventsFormPageModule' },
  { path: 'students-main', loadChildren: './students-main/students-main.module#StudentsMainPageModule' },
  { path: 'students-register-form', loadChildren: './students-register-form/students-register-form.module#StudentsRegisterFormPageModule' },
  { path: 'students-rate-form', loadChildren: './students-rate-form/students-rate-form.module#StudentsRateFormPageModule' },
  { path: 'faculty-list', loadChildren: './faculty-list/faculty-list.module#FacultyListPageModule' },
  { path: 'faculty-view-details/:id', loadChildren: './faculty-view-details/faculty-view-details.module#FacultyViewDetailsPageModule' },
  { path: 'faculty-upload-form', loadChildren: './faculty-upload-form/faculty-upload-form.module#FacultyUploadFormPageModule' },
  { path: 'login-form', loadChildren: './login-form/login-form.module#LoginFormPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
