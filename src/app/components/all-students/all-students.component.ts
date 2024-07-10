import { Component } from '@angular/core';
import { student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent {
  public students: any;
  constructor(private studentService: StudentService){
    this.studentService.getStudents().subscribe(
      (data: any)=>{
        this.students=data;
      },
      (err: any)=>{
        alert("internal error");
      }
    )
  }
 
}
