import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, subscribeOn } from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Donor } from './donor'
import { DonorDashboardService } from './donor-dashboard.service'
export interface DonationList {
  amount: number;
  items: string;
}
export interface Donation {
  value: string;
  viewValue: string;
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
  // editDonor: Donor; // the hero currently being edited
 
  displayedColumns: string[] = ['select','amount', 'items'];
  dataSource = DONATION_DATA;
  options: FormGroup;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    selectedValue: string;

  donations: Donation[] = [
    {value: 'Clothes', viewValue: 'Clothes'},
    {value: 'Shoes', viewValue: 'Shoes'},
    {value: 'Baby Food', viewValue: 'Baby Food'},
    {value: 'Diaper Bags', viewValue: 'Diaper Bags'},
    {value: 'Bottles', viewValue: 'Bottles'},
    {value: 'Pacifiers', viewValue: 'Pacifiers'},
    {value: 'Diapers', viewValue: 'Boxes of Diapers'},
    {value: 'Beds', viewValue: 'Beds'},
    {value: 'MISC', viewValue: 'MISC'}
  ];
    
  constructor(private breakpointObserver: BreakpointObserver,formBuilder: FormBuilder, private donordashboardService: DonorDashboardService) {
    this.options = formBuilder.group({
      bottom: 0,
      fixed: false,
      top: 65
    });
  }
  addForm: FormGroup;

  ngOnInit() {
    //get all donations
    this.donordashboardService.getDonationById(this.donor.id)
    .subscribe( data => {
      this.donor = data
      // this.addForm = this.formBuilder.group({
      //   id: [],
      //   email: [''],
      //   firstName: [''],
      //   lastName: ['']
    });
  }
  //delete donations
  deleteDonation(donors: Donor): void {
    this.donordashboardService.deleteDonation(donors.id)
      .subscribe( data => {
        // this.donor = this.donor.filter(d => d !== donors);
      })
  };
  //edit donations
  editDonation(donors: Donor): void {
    localStorage.removeItem("editDonorId");
    localStorage.setItem("editDonorId", donors.id.toString());
    // this.router.navigate(['edit-donor']);
  };
  //add donations
  addDonation(): void {
    this.donordashboardService.createDonation(this.addForm.value)
    .subscribe( data => {

    })
  }
}