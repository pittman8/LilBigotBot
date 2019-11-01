import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelloService } from '../hello.service';
import { Hello } from '../Hello';
import { NgxTweetModule } from "ngx-tweet";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  input_search = 'example_user';
  result = 'Output holder';
  clientHello: Hello = new Hello();

  getHello(): void {
    //sends value from search bar to server
    //and displays the value it returns
    this.clientHello.value = this.input_search;
    this.myTaskService.sayHello(this.clientHello).subscribe((serverHello: Hello) => {      
      //this stuff is asynchronous
      this.clientHello = serverHello;
      this.result = this.clientHello.value;
    });
  }

  constructor(private myTaskService: HelloService, private router: Router) { }

  ngOnInit() {
    this.clientHello.value = "default";
    this.clientHello._id = '00000';
    }

}
