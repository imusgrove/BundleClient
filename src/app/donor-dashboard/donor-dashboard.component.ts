import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';

export interface DonationList {
  amount: number;
  items: string;
}
export interface Donation {
  value: string;
  viewValue: string;
}


const DONATION_DATA: DonationList[] = [
  {amount: 20, items: 'Bottles',},
  { amount: 5, items: 'Diaperbags'},
  { amount: 10, items: 'Blankets'}
]

@Component({
  selector: 'app-donor-dashboard',
  templateUrl: './donor-dashboard.component.html',
  styleUrls: ['./donor-dashboard.component.css']
})
export class DonorDashboardComponent implements OnInit {
 
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
    
  constructor(private breakpointObserver: BreakpointObserver,fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 65
    });
  }

  ngOnInit() {
  }

}
