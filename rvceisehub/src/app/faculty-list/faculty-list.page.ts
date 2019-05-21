import { Component, OnInit } from '@angular/core';

import * as facultyjson from '../../assets/facultylist.json';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.page.html',
  styleUrls: ['./faculty-list.page.scss'],
})
export class FacultyListPage implements OnInit {
  facultyList: any;

  constructor() { }

  ngOnInit() {
    console.log(facultyjson.default.faculty[0].name);
    this.facultyList = facultyjson.default.faculty;
  }

  onFacultySelect(facultySelect: any) {
    console.log(facultySelect);
  }

}
