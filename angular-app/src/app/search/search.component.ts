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
  input_search = 'realdonaldtrump';
  result = 'Output holder';
  clientHello: Hello = new Hello();
  IdArray = [];
  numSlurs = ' ';
  tweetIds = [];
  tweettext = [];
  tweetuser = [];
  tweethandle = [];
  tweetdate = [];
  slurArrayString = ' ';
  slurshold: Slurs = new Slurs();

  clear(): void {
    this.slurArrayString = "";
  }
  getSlurList(): void {
    let slursub = this.mySlurService.getslurs().subscribe((serverHello: Slurs) => {
      this.slurshold = serverHello;
      this.slurArrayString = this.slurshold.slurs.join(', ');
    });
    //Unsure if unsubscribe needed
    setTimeout(function () {
      this.clear();
      //slursub.unsubscribe();
    }.bind(this), 5000);
  }

  getHello(): void {
    //sends value from search bar to server
    //and displays the value it returns
    this.clientHello.value = this.input_search;
    let hellosubscription = this.myTaskService.sayHello(this.clientHello).subscribe((serverHello: Hello) => {
      //this stuff is asynchronous
      this.clientHello = serverHello;
      //console.log(serverHello.value);
      //console.log(serverHello.value);
      var stringify = JSON.parse(serverHello.value);
      console.log(stringify);
      //  console.log(stringify.statuses[0].id);
      //console.log(stringify.statuses.length);
      this.tweetIds = [];
      this.tweettext = [];
      this.tweetuser = [];
      this.tweethandle = [];
      this.tweetdate = [];
      for (var i = 0; i < stringify.statuses.length; i++) {
        // console.log(stringify.statuses[i].id);
        this.tweetIds.push(stringify.statuses[i].id_str);
        this.tweettext.push(stringify.statuses[i].text);
        this.tweetuser.push(stringify.statuses[i].user.name);
        this.tweethandle.push(stringify.statuses[i].user.screen_name);
        this.tweetdate.push(stringify.statuses[i].created_at);
      }
      //console.log(this.tweetIds);
      //this.result = this.clientHello.value;
      this.numSlurs = this.tweetIds.length.toString();
      var myLl = document.querySelector('#output_text') /* ) */;

      myLl.innerHTML = "";

      if (stringify.statuses.length > 0) {
        for (var i = 0; i < this.tweetIds.length; i++) {
          let tweetelement = this.tweetIds[i];
          let tweettexts = this.tweettext[i];
          let tweetuser = this.tweetuser[i];
          let tweethandle = this.tweethandle[i];
          let tweetdate = this.tweetdate[i];

          myLl.innerHTML += '<blockquote class="twitter-tweet tw-align-center " data-conversation="none" data-lang="en"><p lang="en" dir="ltr">' + tweettexts + '</p>&mdash; ' + tweetuser + ' (@' + tweethandle + ') <a href="https://twitter.com/' + tweethandle + '/status/' + tweetelement + '">' + tweetdate + '</a></blockquote>';

        }

      } else {
        myLl.innerHTML = '<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">This user is a good doobie.</p>&mdash; Lil&#39; Bigot Bot (@HomophobeHunter) <a href="https://twitter.com/HomophobeHunter/status/1197706918564745216?ref_src=twsrc%5Etfw">November 22, 2019</a></blockquote>';
      }
      twttr.widgets.load();

    });
    //Is this needed? Not sure. If issues with searching multiple times. uncomment below
    //setTimeout(() => { hellosubscription.unsubscribe(); }, 10000);
  }

  constructor(private myTaskService: HelloService, private router: Router, private mySlurService: SlursService, ) { }

  ngOnInit() {
    this.clientHello.value = "default";
    this.clientHello._id = '00000';
    //this.loadScripts();
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    //twttr.widgets.load();
  }

}
