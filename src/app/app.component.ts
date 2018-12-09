import { Component } from '@angular/core';

const Employees = [ 
  { 
    name: 'Mary Smith', 
    title: 'Software Developer', 
    profileImage: '' 
  }, 
  { 
    name: 'John Doe', 
    title: 'Software Tester', 
    profileImage: '' 
  } 
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Employee List';
  empList = Employees; 
}
