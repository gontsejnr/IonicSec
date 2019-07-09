import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

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

  submit({value, valid}:{value:Person, valid:boolean}){

    console.log(value.name);
    console.log(value.surname);
    console.log(value.age);
    console.log(value.gender);
  

  }

}
