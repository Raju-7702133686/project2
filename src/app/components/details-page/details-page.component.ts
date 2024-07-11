import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent {
  public id:any="";
  public student: any={};
  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute){
      this.activatedRoute.params.subscribe(
        (data: any)=>{
          this.id=data.id;

          this.studentService.getStudent(this.id).subscribe(
            (data: any)=>{
              this.student=data;
            }
          )
        }
      )

  
  }
}
