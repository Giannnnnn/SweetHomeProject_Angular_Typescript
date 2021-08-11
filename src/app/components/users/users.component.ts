export interface PeriodicElement {
  name: string;
  id: number;
  rent: string;
  paid: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Giovani Florek', rent: "A1", paid:  'True'},
  {id: 2, name: 'Joao Pedro', rent: "A2", paid:  'True'},
  {id: 3, name: 'Josue Almeida', rent:  "A3", paid:  'True'},
  {id: 4, name: 'Renato Russo', rent:  "A4", paid:  'True'},
  {id: 5, name: 'Gandalf', rent:  "A5", paid: 'True'},
];

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
}
