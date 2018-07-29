import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatSelectModule, MatFormFieldModule, MatTableModule, MatSidenavModule, MatTable } from '@angular/material';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from "@angular/forms";
import { JsonPipe } from '../../../node_modules/@angular/common';


export interface Request {
  value: string;
  viewValue: string;
}

export interface Amount {
  value: number;
  viewValue: number;
}

export interface BasketInventory {
  name: string;
  quantity: number;
}

// const DONATIONDATA: DonationsList[] = [
//   {name: "Clothes (outfits)", quantity: 4},
//   {name: "Shoes", quantity: 1},
//   {name: "Baby food (jars)", quantity: 9},
//   {name: "Diaper Bags", quantity: 1},
//   {name: "Bottles", quantity: 5},
//   {name: "Pacifiers", quantity: 3},
//   {name: "Diapers (box)", quantity: 0},
//   {name: "Bed", quantity: 0},
// ]

const BASKETDATA: BasketInventory[] = []


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  displayedColumns: string[] = ["select", "name", "quantity"];
  // dataSource = new MatTableDataSource<DonationsList>(DONATIONDATA)
  basketDataSource = new MatTableDataSource<BasketInventory>(BASKETDATA)
  selection = new SelectionModel<Request>(true, []);
  options: FormGroup;

  @ViewChild(MatTable) table: MatTable<any>;

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches)
  //   );
  //   selectedValue: string;
  requests: Request[] = [
    {value: 'used_clothing', viewValue: 'Clothes (outfit)'},
    {value: 'used_shoes', viewValue: 'Shoes'},
    {value: 'baby_food', viewValue: 'Baby Food (jar)'},
    {value: 'diaper_bags', viewValue: 'Diaper Bags'},
    {value: 'bottles', viewValue: 'Bottles'},
    {value: 'pacifiers', viewValue: 'Pacifiers'},
    {value: 'diapers_boxes', viewValue: 'Diapers (box)'},
    {value: 'beds', viewValue: 'Bed'},
  ];

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

  testFunction(){
    // console.log(this.selection.selected)
    this.basketDataSource.data.push();
    this.table.renderRows();
    }

  constructor(/*private breakpointObserver: BreakpointObserver*/) { }

  ngOnInit() {
  }


  

}
