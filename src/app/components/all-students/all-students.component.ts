import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent {
  public students: any[]=[];
  public limit:any='';
  public page:any='';
  public column: any='';
  public order: any='';
  public term: any='';
  constructor(private studentService: StudentService, private router: Router){
    this.studentService.getStudents().subscribe(
      (data: any)=>{
        this.students=data;
      },
      (err: any)=>{
        alert("internal error");
      }
    )
  }


  getPaginatedStudents(){
    this.studentService.getPaginatedStudents(this.limit,this.page).subscribe(
      (data: any)=>{
        this.students= data;
      },
      (err: any)=>{
        alert("Internal error");
      }
    )
  }

  getSortedStudents(){
    this.studentService.getSortedStudents(this.column, this.order).subscribe(
      (data: any)=>{
        this.students=data;
      },
      (err: any)=>{
        alert("internal error");
      }
    )
  }

  getFilterdStudents(){
    this.studentService.getFilterdStudents(this.term).subscribe(
      (data: any)=>{
        this.students=data;
      },
      (err: any)=>{
        alert("internal error");
      }
    )
  }
  view(id:number){
    this.router.navigateByUrl('/dashboard/details-page/'+id);
  }
  edit(id: number){
    this.router.navigateByUrl('/dashboard/create-edit/'+id);
  }
 delete(id:number){
  this.studentService.deleteStudent(id).subscribe(
    (data:any)=>{
      alert("Student Data deleted successfully");
      location.reload();
    }
  )
 }
}

