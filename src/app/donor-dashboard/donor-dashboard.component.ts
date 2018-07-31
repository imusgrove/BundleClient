import { Component, OnInit, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, subscribeOn } from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Donation } from './donation'
import { DonorDashboardService } from './donor-dashboard.service'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

export interface DonationList {
  amount: number;
  items: string;
}
export interface Donations {
  used_clothing: string;
  used_shoes: string;
  baby_food: string;
  diaper_bag: string;
  bottles: string;
  pacifiers: string;
  diapers: string;
  beds: string;
}

export interface DonationOptions {
  value: string;
  viewValue: string;
}
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}


const DONATION_DATA: DonationList[] = [
  // {amount: 20, items: 'Bottles',},
  // { amount: 5, items: 'Diaperbags'},
  // { amount: 10, items: 'Blankets'}
]

@Component({
  selector: 'app-donor-dashboard',
  templateUrl: './donor-dashboard.component.html',
  styleUrls: ['./donor-dashboard.component.css']
})
export class DonorDashboardComponent implements OnInit {

  
  donor: Donor;
  // editDonor: Donor;
 
  displayedColumns: string[] = ['select','amount', 'items'];
  dataSource = DONATION_DATA;
  options: FormGroup;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    selectedValue: string;

  donationOptions: DonationOptions[] = [
    {value: 'used_clothing', viewValue: 'Clothing'},
    {value: 'used_shoes', viewValue: 'Shoes'},
    {value: 'baby_food', viewValue: 'Baby Food'},
    {value: 'diaper_bag', viewValue: 'Diaper Bags'},
    {value: 'bottles', viewValue: 'Bottles'},
    {value: 'pacifiers', viewValue: 'Pacifiers'},
    {value: 'diapers', viewValue: 'Boxes of Diapers'},
    {value: 'beds', viewValue: 'Beds'},
    {value: 'MISC', viewValue: 'MISC'}
  ];
    
  constructor(private breakpointObserver: BreakpointObserver,formBuilder: FormBuilder, private donordashboardService: DonorDashboardService,public dialog: MatDialog) {
    this.options = formBuilder.group({
      bottom: 0,
      fixed: false,
      top: 65
    });
  }
  addForm: FormGroup;

  ngOnInit() {
    //get all donations
    
    }

    getDonations(): void {
      this.donordashboardService.getDonations()
      .subscribe(donations => this.donations = donations);
    }

    getDonationByUserId(): void {
    this.donordashboardService.getDonationByUserId(this.donor.id)
    .subscribe( data => {
      this.donor = data
    });
  }

  openDialog() {
    this.dialog.open(this.DialogDataExampleDialog, {
      data: {
        animal: 'panda'
      }
    })
  };

  //delete donations
  deleteDonation(donation: Donation): void {
    this.donordashboardService.deleteDonation(donation.id)
      .subscribe( data => {
        // this.donor = this.donor.filter(d => d !== donors);
      })
  };

  //edit donations
  editDonation(donation: Donation): void {
    localStorage.removeItem("editDonationId");
    localStorage.setItem("editDonationId", donation.id.toString());
    // this.router.navigate(['edit-donor']);
  };

  //add donations
  createDonation(): void {
    this.donordashboardService.createDonation(this.addForm.value)
    .subscribe( data => {
    })
  }
  // deleteDonation(donors: Donor): void {
  //   this.donordashboardService.deleteDonation(donors.id)
  //     .subscribe( data => {
  //       // this.donor = this.donor.filter(d => d !== donors);
  //     })
  // };
  // editDonation(donors: Donor): void {
  //   localStorage.removeItem("editDonorId");
  //   localStorage.setItem("editDonorId", donors.id.toString());
  //   // this.router.navigate(['edit-donor']);
  // };
  // addDonation(): void {
  //   this.donordashboardService.createDonation(this.addForm.value)
  //   .subscribe( data => {

  //   })
  // }
}
@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'donor-dashboard-edit.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}