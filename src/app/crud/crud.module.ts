import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
@NgModule({
  declarations: [DashboardComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    OrderModule,
  ],
})
export class CrudModule {}
