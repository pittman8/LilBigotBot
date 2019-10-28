import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';   // ###### to allow me to jum to another page
// or back to myself to get a refresh
import { HelloService } from '../hello.service';
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

  getHello(): void {
    console.log('start getHello()');
    console.log(this.newHello);
    this.myTaskService.sayHello().subscribe((serverData: Hello) => {
      this.newHello = serverData;
    })
    console.log(this.newHello);
    console.log('end getHello()');
  }

  update(): void {
    this.result = this.newHello.value;
  }

  startSearch() {
    //let newResult = 'Searched for ' + this.input_search ;
    console.log('startSearch()');
    console.log(this.newHello);
    //contact server to search 
    //this.newHello = this.myTaskService.sayHello();
    //this.result = newResult;
    console.log('end startSearch()');
  }
  constructor(private myTaskService: HelloService, private router: Router) { }
  ngOnInit() {
    this.newHello.value = "default";
    }

}
