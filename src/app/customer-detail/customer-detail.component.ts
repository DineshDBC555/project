import { Component,Inject,Input,OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customerForm!: FormGroup;
 
  @Input() customerId!: number;
  customerData: any;
  constructor(private dialogRef: MatDialogRef<CustomerDetailComponent>,
    private formBuilder: FormBuilder,private customerService: CustomerService, @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.customerId = data.customerId; 
     
      
  }
  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.fetchCustomerDetails();
  }
  fetchCustomerDetails(): void {

    // Fetch customer details using service
    this.customerService.getCustomer(this.customerId).subscribe(
      (data) => {
        // Set form values with fetched customer details
        this.customerData = data;
        
        
        this.customerForm.patchValue({
          name: this.customerData.name,
          email: this.customerData.email
        });
      },
      (error) => {
        // Handle error
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    // Form submission logic (if needed)
    console.log('Form submitted');
  }
}
