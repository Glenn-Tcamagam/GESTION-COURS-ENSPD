import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
public form={
  email:'',
  password:''
}


  SubmitLogin(){
console.log(this.form);

  }

}
