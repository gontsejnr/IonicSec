import { Component, OnInit } from '@angular/core';
import { PERSON_LIST } from 'src/app/mocks/person.mocks';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})


export class ProfilePage implements OnInit {

  personList = PERSON_LIST;
  cat = true;

  constructor() { }

  ngOnInit() {
  }

}
