import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-hospital-detail',
  templateUrl: './edit-hospital-detail.component.html',
  styleUrls: ['./edit-hospital-detail.component.scss']
})
export class EditHospitalDetailComponent implements OnInit {

  addhospitalDetail: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addhospitalDetail = this.fb.group({
      hospitalName: ['', Validators.required],
      establishedDate: ['', Validators.required],
      postalCode: ['', Validators.required],
      hospitalAddress: ['', Validators.required],
      mailingAddress: ['', Validators.required],
      webAddress: ['', Validators.required],
      contactPerson: ['', Validators.required],
      contactNumber: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      emaiId: ['', Validators.required]
    })
  }

}
