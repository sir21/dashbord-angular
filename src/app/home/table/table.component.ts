import { Component, OnInit, ViewChild } from '@angular/core';

import data from '../../../assets/json/example.json';
import { Book } from 'src/app/models/book.js';
import {
  MatTableDataSource,
  MatPaginator,
  MatSort
} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  books: Book[] = data.data;
  displayedColumns: string[] = [
    'id',
    'type',
    'link',
    'urn',
    'created_at',
    'updated_at',
    'content',
    'properties',
    'display_type',
    'display_image',
    'author',
    'publisher'
  ];
  dataSource: MatTableDataSource<Book>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(this.books);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
