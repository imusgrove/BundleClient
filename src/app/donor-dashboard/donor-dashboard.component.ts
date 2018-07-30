import { Component, OnInit, Inject, Injector, Injectable } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, subscribeOn } from "rxjs/operators";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Donor } from "./donor";
import { DonorDashboardService } from "./donor-dashboard.service";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
export interface DonationList {
  amount: number;
  items: string;
}
export interface Donation {
  value: string;
  viewValue: string;
}
export interface DialogData {
  animal: "panda" | "unicorn" | "lion";
}
const DONATION_DATA: DonationList[] = [
  // {amount: 20, items: 'Bottles',},
  // { amount: 5, items: 'Diaperbags'},
  // { amount: 10, items: 'Blankets'}
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

  donor: Donor;
  // editDonor: Donor; // the hero currently being edited

  displayedColumns: string[] = ["select", "amount", "items"];
  dataSource = DONATION_DATA;
  options: FormGroup;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  selectedValue: string;

  donations: Donation[] = [
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
    public dialog: MatDialog,
    private router: Router
  ) {
    this.options = formBuilder.group({
      bottom: 0,
      fixed: false,
      top: 65
    });
  }

  ngOnInit() {
    //get all donations
    //   this.donordashboardService.getDonationById(this.donor.id)
    //   .subscribe( data => {
    //     this.donor = data

    //     //  this.addForm = this.formBuilder.group({
    //     //   id: [],
    //     //    item: [''],
    //     //   amount: []
    // //     .subscribe( data => {
    // //       // this.donor = this.donor.filter(d => d !== donors);
    //     // })
    // });
    this.addForm = this.formBuilder.group({
      id: [],
      item: [""],
      amount: []
      //     .subscribe( data => {
      //       // this.donor = this.donor.filter(d => d !== donors);
    });
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
  // convenience getter for easy access to form fields
  // get f() { return this.addForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }

    this.loading = true;
    console.log("test");
    this.donordashboardService
      .createDonation(this.addForm.value)
      // this.donordashboardService.createDonation(this.addForm.value)
      .pipe(first())
      .subscribe(
        data => {
          // this.alertService.success('Registration successful', true);
          console.log(data);
          this.router.navigate(["/donordashboard"]);
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
@Component({
  selector: "dialog-data-example-dialog",
  templateUrl: "donor-dashboard-edit.html"
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
