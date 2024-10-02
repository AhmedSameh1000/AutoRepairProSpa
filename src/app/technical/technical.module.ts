import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicalRoutingModule } from './technical-routing.module';
import { TechnicalListComponent } from './technical-list/technical-list.component';
import { MangeTechnicalComponent } from './mange-technical/mange-technical.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations: [TechnicalListComponent, MangeTechnicalComponent],
  imports: [
    CommonModule,
    TechnicalRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class TechnicalModule {}
