import { Component } from '@angular/core';
import { AbstractFormGroupDirective, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  public studentForm: FormGroup = new FormGroup({
    name : new FormControl(),
    male : new FormControl(),
    female: new FormControl(),
    mobile : new FormControl(),
    email : new FormControl(),
    batch : new FormControl()
  })
  onsubmit(){
    console.log(this.studentForm);
    window.location.reload();
    alert("form submitted successfully");

  }
};
