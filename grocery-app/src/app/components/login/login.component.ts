import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl,FormBuilder, FormGroupName, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
 
  
  //nested formgroup address(in reg form)
  
  constructor(private fb:FormBuilder) {}
  /*userForm=this.fb.group({
    name:["johny"],
    password:["ddd"],
    address:this.fb.group({
      house:["house"],
      city:["sss"],
      country:["dsfsdf"]
    })

  })*/
  userForm=this.fb.group({
    name:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    password:[null,[Validators.required,Validators.pattern("^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$")]],
    house:[null,Validators.required]
  })
  localData(){

  }
  onSubmit(data){
 console.log(data)
  }

  ngOnInit(): void {}
}