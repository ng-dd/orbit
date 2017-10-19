import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'; 

@Component({
  selector: 'app-testingdaniel',
  templateUrl: './testingdaniel.component.html',
  styleUrls: ['./testingdaniel.component.css']
})
export class TestingdanielComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log('hello')
    this.userService.addUser({
      username: 'chris'
    })
  }

}
