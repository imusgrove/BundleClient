import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatSelectModule, MatFormFieldModule, MatTableModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


export interface DonationsList {
  name: string;
  quantity: number;
}

export interface Amount {
  value: number;
  viewValue: number;
}

const DONATIONDATA: DonationsList[] = [
  {name: "Clothes (outfits)", quantity: 4},
  {name: "Shoes", quantity: 2},
  {name: "Baby food (jars)", quantity: 10},
  {name: "Diaper Bags", quantity: 1},
  {name: "Bottles", quantity: 3},
  {name: "Pacifiers", quantity: 2},
  {name: "Diapers (box)", quantity: 1},
  {name: "Bed", quantity: 1},
]

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  displayedColumns: string[] = ["select", "name", "quantity"];
  dataSource = new MatTableDataSource<DonationsList>(DONATIONDATA)
  selection = new SelectionModel<DonationsList>(true, []);

  amounts: Amount[] = [
    {value: 1, viewValue: 1},
    {value: 2, viewValue: 2},
    {value: 3, viewValue: 3},
    {value: 4, viewValue: 4},
    {value: 5, viewValue: 5},
    {value: 6, viewValue: 6},
    {value: 7, viewValue: 7},
    {value: 8, viewValue: 8},
    {value: 9, viewValue: 9},
    {value: 10, viewValue: 10}

  ];

  constructor() { }

  ngOnInit() {
  }

}
