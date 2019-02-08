import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'add-to-list', loadChildren: './add-to-list/add-to-list.module#AddToListPageModule' },
  { path: 'list-item-popover', loadChildren: './list-item-popover/list-item-popover.module#ListItemPopoverPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
