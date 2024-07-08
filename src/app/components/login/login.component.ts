import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirstValueFromConfig } from 'rxjs/internal/firstValueFrom';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public userForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ])
  })
constructor( private loginservice: LoginserviceService, private router: Router){}
  login(){
    console.log(this.userForm);

    this.loginservice.dologin(this.userForm.value).subscribe(
      (data :any) =>{
        this.router.navigateByUrl("/dashboard");
      },
      (err : any)=> {
        alert("login failed")
      }
    )
  }

}
