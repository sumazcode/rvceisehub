import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StudentsRegisterFormPage } from './students-register-form.page';

const routes: Routes = [
  {
    path: '',
    component: StudentsRegisterFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentsRegisterFormPage]
})
export class StudentsRegisterFormPageModule {}
