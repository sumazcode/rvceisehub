import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StudentsRateFormPage } from './students-rate-form.page';

const routes: Routes = [
  {
    path: '',
    component: StudentsRateFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentsRateFormPage]
})
export class StudentsRateFormPageModule {}
