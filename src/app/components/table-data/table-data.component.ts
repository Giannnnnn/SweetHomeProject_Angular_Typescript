import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'True'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'True'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'True'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'True'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'True'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'True'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'True'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'False'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'False'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'False'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-data',
  styleUrls: ['table-data.component.scss'],
  templateUrl: 'table-data.component.html',
})
export class TableDataComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
