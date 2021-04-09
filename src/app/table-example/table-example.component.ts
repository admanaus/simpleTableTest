import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.css']
})
export class TableExampleComponent implements OnInit {

  constructor() { }

  hole1Score = 0;

  ngOnInit(): void {
  }

  consoleLog(): void{
    console.log('New Score: ' + this.hole1Score);
  }

}
