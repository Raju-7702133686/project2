import { Component } from '@angular/core';
import { AbstractFormGroupDirective, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
// Mapping with form
  public studentForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    male: new FormControl(),
    female: new FormControl(),
    mobile: new FormControl('',[Validators.required, Validators.min(100), Validators.max(9999999999)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    batch: new FormControl(),
    address: new FormGroup({
      city: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      mandal: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      district: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      state: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      pincode: new FormControl('',[Validators.required, Validators.min(100), Validators.max(666666)])
    }),
    education: new FormArray([]),
    company: new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      location: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      package: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      offerDate: new FormControl()
    }),
    sourceType: new FormControl(),
    direct: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    referral: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)])
  });
required: any;
minlenght: any;
  get educationFormArray(){
    return this.studentForm.get('education') as FormArray;
  }
  addCard(){
    this.educationFormArray.push(
      new FormGroup({
        qualification: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
        year: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
        percentage: new FormControl('',[Validators.required, Validators.min(100), Validators.max(4444)])
      })
    )
  }
  deleteCard(i: number){
    this.educationFormArray.removeAt(i);
  }
  constructor(private studentservice: StudentService){}
  onsubmit() {
    this.studentservice.createStudent(this.studentForm.value).subscribe(
      (data: any)=>{
        alert("Student data created successfully");
      }
    ),
    (err: any)=>{
      alert("Student data creation failed")
    }
    console.log(this.studentForm);

  }
};
