import { Component, OnInit } from '@angular/core';

export interface DonationList {
  amount: number;
  items: string;
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

  displayedColumns: string[] = ['amount', 'items'];
  dataSource = DONATION_DATA;

  constructor() { }

  ngOnInit() {
  }

}
