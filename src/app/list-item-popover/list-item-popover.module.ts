import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListItemPopoverPage } from './list-item-popover.page';

const routes: Routes = [
  {
    path: '',
    component: ListItemPopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListItemPopoverPage]
})
export class ListItemPopoverPageModule {}
