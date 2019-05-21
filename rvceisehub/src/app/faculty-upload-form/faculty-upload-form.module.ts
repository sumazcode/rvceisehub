import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FacultyUploadFormPage } from './faculty-upload-form.page';

const routes: Routes = [
  {
    path: '',
    component: FacultyUploadFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FacultyUploadFormPage]
})
export class FacultyUploadFormPageModule {}
