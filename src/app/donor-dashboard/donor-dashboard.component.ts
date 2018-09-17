import { Component, OnInit, Inject, Injector, Injectable, Output, EventEmitter } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";
import { Observable, identity } from "rxjs";
import { map, subscribeOn } from "rxjs/operators";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Donor } from "./donation";
import { DonorDashboardService } from "./donor-dashboard.service";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
import { DonorStateServiceService } from "../services/donor-state-service.service";
import { DataSource } from "../../../node_modules/@angular/cdk/table";
// import { disconnect } from "cluster";
export interface DonationList {
  amount: number;
  items: string;
}
export interface Donation {
  donationOption: string;
  donationAmount: number;
}

export interface CustomDonor {
  id: number;
  donationItem: string;
  donationAmount: number;
}

const DONATION_DATA: DonationList[] = [
  // {amount: 20, items: 'Bottles',},
  // { amount: 5, items: 'Diaperbags'},
  // { amount: 10, items: 'Blankets'}
  { amount: 0, items: "" }
];

@Component({
  selector: "app-donor-dashboard",
  templateUrl: "./donor-dashboard.component.html",
  styleUrls: ["./donor-dashboard.component.css"]
})
export class DonorDashboardComponent implements OnInit {
  addForm: FormGroup;
  loading = false;
  submitted = false;
  donor: Donor[];
  array: Object[] = [];
  displayedColumns: string[] = [
    "amount",
    "items",
    "editbutton",
    "deletebutton"
  ];
  dataSource = new TableDataSource(this.donordashboardService);
  options: FormGroup;
  id: number;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  selectedValue: string;

  donations: any[] = [
    { value: "used_clothes", viewValue: "Clothes" },
    { value: "used_shoes", viewValue: "Shoes" },
    { value: "baby_food", viewValue: "Baby Food" },
    { value: "diaper_bags", viewValue: "Diaper Bags" },
    { value: "bottles", viewValue: "Bottles" },
    { value: "pacifiers", viewValue: "Pacifiers" },
    { value: "diaper_boxes", viewValue: "Boxes of Diapers" },
    { value: "beds", viewValue: "Beds" },
    { value: "misc_item", viewValue: "MISC" }
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private formBuilder: FormBuilder,
    private donordashboardService: DonorDashboardService,
    public donorStateService: DonorStateServiceService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.options = formBuilder.group({
      bottom: 0,
      fixed: false,
      top: 65
    });
  }

  donors = [];

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      options: [""],
      amount: []
    });
  }

  onSubmit() {
    this.submitted = true;
    const donation: Donation = {
      donationOption: this.addForm.value.options,
      donationAmount: parseInt(this.addForm.value.amount)
    };
    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }

    //create donation
    this.loading = true;
    this.donordashboardService
      .createDonation(donation)
      // this.donordashboardService.createDonation(this.addForm.value)
      .pipe(first())
      .subscribe(
        data => {
          //push into donations
          console.log(data);
          this.router.navigate(["/donordashboard"]);
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
        }
      );
  }
  //delete donation
  onDelete(id) {
    console.log('deleting')
    this.donordashboardService.deleteDonation(id).subscribe(
      data => {},
      error => {},
      () => {}
    );  
    
  }

  //edit donation
  editDonation(data): void {
    let donationEdit = this.dialog.open(DonationEditDialogue, {
      data: data,
      height: "300x",
      width: "250px"
    });
  }
}

export class TableDataSource extends DataSource<any> {
  constructor(private donorDashboardService: DonorDashboardService) {
    super();
  }

  connect(): any {
    return this.donorDashboardService.getDonations();
  }
  disconnect() {}
}




@Component({
  selector: "donation-edit-dialogue",
  templateUrl: "./donation-edit-dialogue.html",
  styleUrls: ["./donation-edit-dialogue.css"]
})
export class DonationEditDialogue {
  addForm: FormGroup;
  edited = new EventEmitter;
  constructor(
    private donorDashboardService: DonorDashboardService,
    public donationEdit: MatDialogRef<DonationEditDialogue>,
    @Inject(MAT_DIALOG_DATA) public data: CustomDonor,
    private formBuilder: FormBuilder
  ) {}

  editDonation(data): void {
    console.log(data.value)
    this.donorDashboardService.updateDonation(data.value).subscribe(
      next => {
        this.edited.emit(true)
      },
      error => {
        this.edited.emit(true)
      },
      () => {
        this.donationEdit.close();
      }
    )
  }

  ngOnInit() {
   this.addForm = this.formBuilder.group ({
      id: this.data.id,
      donationItem: this.data.donationItem,
      donationAmount: this.data.donationAmount
    });
  }

}
