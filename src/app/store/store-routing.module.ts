import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { authGuard } from '../Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: StoreListComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
