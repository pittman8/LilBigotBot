import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

import { Router } from '@angular/router';   // ###### to allow me to jum to another page
// or back to myself to get a refresh


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  input_search = 'example_user';
  result = 'Output holder';

  startSearch() {
    let newResult = this.myTaskService.sayHello();

    //contact server to search 

    this.result = newResult;
  }
  constructor(private myTaskService: SearchService, private router: Router) { }
  ngOnInit() {
  }

}
