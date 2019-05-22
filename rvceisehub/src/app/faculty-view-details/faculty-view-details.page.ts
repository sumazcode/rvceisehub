import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as facultyjson from '../../assets/facultylist.json';

@Component({
  selector: 'app-faculty-view-details',
  templateUrl: './faculty-view-details.page.html',
  styleUrls: ['./faculty-view-details.page.scss'],
})
export class FacultyViewDetailsPage implements OnInit {
  faculty: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const staffId = this.route.snapshot.paramMap.get('id');
    console.log(staffId);

    for (let index = 0; index < facultyjson.default.faculty.length; index++) {
      if (staffId === facultyjson.default.faculty[index].staffId) {
        this.faculty = facultyjson.default.faculty[index];
        break;
      }
    }
  }

}
