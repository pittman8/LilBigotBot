import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HelloService } from '../hello.service';
import { SlursService } from '../slurs.service';
import { Hello } from '../Hello';
import { Slurs } from '../slurs';

declare var twttr;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  input_search = 'Enter a username';
  clientHello: Hello = new Hello();
  slurshold: Slurs = new Slurs();
  result = '';
  numSlurs = ' ';
  slurArrayString = ' ';
  IdArray = [];
  tweetIds = [];
  tweettext = [];
  tweetuser = [];
  tweethandle = [];
  tweetdate = [];

  getHello(): void {
    //sends value from search bar to server
    //and displays the value it returns
    //Uses the Hello data type
    // class Hello {
    //   _id: String;
    //    value: string;
    //    tweetid: string
    //  }

    this.clientHello.value = this.input_search;

    let hellosubscription = this.myTaskService.sayHello(this.clientHello).subscribe((serverHello: Hello) => {
      //this stuff is asynchronous
    
      this.clientHello = serverHello;
    
      //clean old values
      this.tweetIds = [];
      this.tweettext = [];
      this.tweetuser = [];
      this.tweethandle = [];
      this.tweetdate = [];

      var stringify = JSON.parse(serverHello.value);

      for (var i = 0; i < stringify.statuses.length; i++) {
        // adds string values from tweets to the
        // appropriate component arrays
        this.tweetIds.push(stringify.statuses[i].id_str);
        this.tweettext.push(stringify.statuses[i].text);
        this.tweetuser.push(stringify.statuses[i].user.name);
        this.tweethandle.push(stringify.statuses[i].user.screen_name);
        this.tweetdate.push(stringify.statuses[i].created_at);
      }

      this.numSlurs = this.tweetIds.length.toString(); //total slurs

      var myLl = document.querySelector('#output_text');

      myLl.innerHTML = ""; //clean old value

      if (stringify.statuses.length > 0) {
        //starts creating embedded tweets from returned
        //information
        for (var i = 0; i < this.tweetIds.length; i++) {
          let tweetelement = this.tweetIds[i];
          let tweettexts = this.tweettext[i];
          let tweetuser = this.tweetuser[i];
          let tweethandle = this.tweethandle[i];
          let tweetdate = this.tweetdate[i];

          myLl.innerHTML += '<blockquote class="twitter-tweet tw-align-center " data-conversation="none" data-lang="en"><p lang="en" dir="ltr">' + tweettexts + '</p>&mdash; ' + tweetuser + ' (@' + tweethandle + ') <a href="https://twitter.com/' + tweethandle + '/status/' + tweetelement + '">' + tweetdate + '</a></blockquote>';
        }

      } else {
        //when it finds nothing, it shows a placeholder tweet
        myLl.innerHTML = '<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">This user is a good doobie.</p>&mdash; Lil&#39; Bigot Bot (@HomophobeHunter) <a href="https://twitter.com/HomophobeHunter/status/1197706918564745216?ref_src=twsrc%5Etfw">November 22, 2019</a></blockquote>';
      }
      twttr.widgets.load();
    });
  }

  getSlurList(): void {
      // returns an array of slurs
      // and displays them.
      // uses the slur datatype
      // class Slurs {
      //   _id: String;
      //    value: string;
      //    slurs: any;
      //  }      
    let slursub = this.mySlurService.getslurs().subscribe((serverHello: Slurs) => {
      this.slurshold = serverHello;
      this.slurArrayString = this.slurshold.slurs.join(', ');
    });
    setTimeout(function () {
      //then deletes itself after 4 seconds
      //to avoid causing psychic harm to viewers
      this.clear();
    }.bind(this), 4000);
  }
  clear(): void { 
    //clears the slurs from the page
    this.slurArrayString = "";
  }

  constructor(private myTaskService: HelloService, private router: Router, private mySlurService: SlursService, ) { }
  //our only component which needed multiple services

  ngOnInit() {
    //initial values for clientHello hello object
    //probably deprecated
    this.clientHello.value = "default";
    this.clientHello._id = '00000';

    //add content to slurList button
    document.getElementById('slurlink').addEventListener("click", event => {
      this.getSlurList();
    });
    document.getElementById('search_input').addEventListener("focus", event => {
      this.input_search='';
    });
  }

  ngAfterViewInit(): void {
  }

}
