import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  customers: any[] = [];
  filteredCustomers: any[] = [];
  customerIDdata: any;

  customerId: any;
  showModal: boolean = true;
  show: boolean = true;
  valueEmittedFromChildComponent: boolean | any;
  showDeleteDialog: boolean = false;
  customerToDelete!: number;
  searchTerm: string = '';
  constructor(private customerService: CustomerService, private router: Router, private _route: ActivatedRoute, private dialog: MatDialog) { }

  @ViewChild('exampleModal') exampleModal: any;
  ngOnInit(): void {
    this.loadCustomers();

  }
  showDeleteConfirmation(customerId: number): void {

    this.customerToDelete = customerId;
    this.showDeleteDialog = true;
  }

  closeDeleteConfirmation(): void {
    this.showDeleteDialog = false;
  }

  deleteCustomer(customerId: number): void {
    this.customerService.deleteCustomer(customerId).subscribe(() => {
      // Customer successfully deleted, you may want to refresh the customer list
      this.loadCustomers();
      this.closeDeleteConfirmation();
    }, error => {
      // Handle any errors that occur during deletion

      this.closeDeleteConfirmation();
    });
  }

  openAddCustomerDialog(): void {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle any close events or returned data here
    });
  }
  openEditCustomerDialog(customerId: number): void {

    const dialogRef = this.dialog.open(CustomerDetailComponent, {
      width: '400px',
      data: { customerId: customerId }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle any close events or returned data here
    });
  }

  loadCustomers() {
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
      this.applyFilter();
    });
  }

  applyFilter() {

    this.filteredCustomers = this.customers.filter(customer =>
      customer.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

  }


  closeModal() {
    const modal = document.getElementById('exampleModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }



}
