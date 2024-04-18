import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'customer/:id', component: CustomerDetailComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: '', redirectTo: '/customers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
