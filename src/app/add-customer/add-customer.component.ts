// add-customer.component.ts

import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {
  @Output() customerAdded = new EventEmitter<any>();
  customerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private dialogRef: MatDialogRef<AddCustomerComponent>) {
    this.customerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    if (this.customerForm.valid) {
      const newCustomer = this.customerForm.value;
      this.customerAdded.emit(newCustomer);
      // You can reset the form here if needed
      this.customerForm.reset();
    }
  }
}
