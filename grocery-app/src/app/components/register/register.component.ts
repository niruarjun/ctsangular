import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public interests=[
    'Bakery','Drinks','Deserts'
  ]
  public userModel= new User('','','','','',false)
  constructor() { }
  onSubmit()
  {
    console.log(this.userModel);
    
  }

  ngOnInit(): void {

  }

}
