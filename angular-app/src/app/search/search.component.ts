import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  input_search = 'example_user';
  result = 'Output holder';

  startSearch() {
    let newResult = 'Searched for ' + this.input_search ;

    //contact server to search 

    this.result = newResult;
  }
  constructor() { }
  ngOnInit() {
  }

}
