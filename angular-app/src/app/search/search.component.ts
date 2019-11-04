import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelloService } from '../hello.service';
import { Hello } from '../Hello';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  input_search = 'realdonaldtrump';
  result = 'Output holder';
  clientHello: Hello = new Hello();
  numSlurs = ' ';
tweetIds = [];
 // embedded = 'embedded tweet here';

  getHello(): void {
    //sends value from search bar to server
    //and displays the value it returns
    this.clientHello.value = this.input_search;
    this.myTaskService.sayHello(this.clientHello).subscribe((serverHello: Hello) => {      
      //this stuff is asynchronous
      this.clientHello = serverHello;
      //console.log(serverHello.value);
      var stringify = JSON.parse(serverHello.value);
      // console.log(stringify);
     //  console.log(stringify.statuses[0].id);
       //console.log(stringify.statuses.length);
       for(var i = 0; i < stringify.statuses.length; i++) {
         console.log(stringify.statuses[i].id);
         this.tweetIds.push(stringify.statuses[i].id);
       }
     //  console.log(this.idArray);
      this.result = this.clientHello.value;
      this.numSlurs = this.tweetIds.length.toString();
      //this.embedded = this.idArray[0];
    });
  }

  constructor(private myTaskService: HelloService, private router: Router) { }

  ngOnInit() {
    this.clientHello.value = "default";
    this.clientHello._id = '00000';
    }

}
