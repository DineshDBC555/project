import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    AddCustomerComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,FormsModule,ReactiveFormsModule, BrowserAnimationsModule, MatIconModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
