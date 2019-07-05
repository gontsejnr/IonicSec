import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  name; 
  surname;
  age;
  gender;

  info: FormGroup;

  constructor(private fb:FormBuilder) { 

    this.info =  this.fb.group({

      name: ['', Validators.required],
      surname: ['',Validators.required],
      age: [0, Validators.required],
      gender: ['',Validators.required]
    });
  }

  ngOnInit() {
  }

  submit(info){

    console.log(info.name);
    console.log(info.surname);
    console.log(info.age);
    console.log(info.gender);

  }

}
