import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicalListComponent } from './technical-list/technical-list.component';
import { authGuard } from '../Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TechnicalListComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnicalRoutingModule {}
