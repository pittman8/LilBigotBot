import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

import { Router } from '@angular/router';   // ###### to allow me to jum to another page
// or back to myself to get a refresh


import { Hello } from '../Hello';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  input_search = 'example_user';
  result = 'Output holder';
  newHello: Hello = new Hello();

  startSearch(): void {
    console.log('startSearch()');
    let thisHello = this.myTaskService.sayHello();
    //this.newHello.value = thisHello.value;
    console.log(thisHello);
	  console.log('end startSearch()');

	//newResult.value = returnResult.value;
	//console.log('recieved: ' + newResult.value);
	//this.result = newResult.value;
  }
  constructor(private myTaskService: SearchService, private router: Router) { }
  ngOnInit() {
    this.newHello.value = "";
  }

}
