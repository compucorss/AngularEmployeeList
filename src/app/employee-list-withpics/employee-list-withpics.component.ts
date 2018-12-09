import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../employee-data';


@Component({
  selector: 'app-employee-list-withpics',
  templateUrl: './employee-list-withpics.component.html',
  styleUrls: ['./employee-list-withpics.component.css']
})

export class EmployeeListWithpicsComponent implements OnInit {

  employees = EMPLOYEES;
  selectedEmployee: Employee;


   constructor() { }

  ngOnInit() {
   
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }
}
