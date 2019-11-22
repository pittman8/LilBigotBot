import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HelloService } from '../hello.service';
import { SlursService } from '../slurs.service';
import { Hello } from '../Hello';
import {Slurs} from '../slurs';
import { NgxTweetModule } from "ngx-tweet";

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
  //var slurArray = ['fag', 'faggot', 'dyke', 'homo', 'sodomite', 'great'];
  //this.slurArrayString = slurArray.join(', ');
  //setTimeout(this.clear, 10000); 
  // for (var i=0; i < slurArray.length; i++) {
  // var opt = slurArray[i];
  // var el = document.createElement("option");
  // el.textContent = opt;
  //   el.value = opt;
  //   select.appendChild(el);
  // }
  let slursub = this.mySlurService.getslurs().subscribe((serverHello: Slurs) => {
    this.slurshold = serverHello;
    this.slurArrayString = this.slurshold.slurs.join(', ');
  });
  //Unsure if unsubscribe needed
  //setTimeout(() => {this.clear(); slursub.unsubscribe(); console.log("bep")},10000)
  setTimeout(function() {
    this.clear();
  }.bind(this), 5000);
}

  getHello(): void {
    //sends value from search bar to server
    //and displays the value it returns
    this.clientHello.value = this.input_search;
    let hellosubscription = this.myTaskService.sayHello(this.clientHello).subscribe((serverHello: Hello) => {      
      //this stuff is asynchronous
      this.clientHello = serverHello;
      console.log("val2");
      console.log(serverHello.value);
      //this.result = this.clientHello.value;
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
       for(var i = 0; i < stringify.statuses.length; i++) {
        // console.log(stringify.statuses[i].id);
         this.tweetIds.push(stringify.statuses[i].id_str);
         this.tweettext.push(stringify.statuses[i].text);
         this.tweetuser.push(stringify.statuses[i].user.name);
         this.tweethandle.push(stringify.statuses[i].user.screen_name);
         this.tweetdate.push(stringify.statuses[i].created_at);
       }
      //  console.log(this.theIds);
      //  for(var i = 0; i < this.theIds.length; i++) {
      //     this.tweetIds.push(this.theIds[i]);
      //  }
       //console.log(this.tweetIds);
      //this.result = this.clientHello.value;
      this.numSlurs = this.tweetIds.length.toString();
      //this.embedded = this.idArray[0];

      //var myEl = /* angular.element( */ document.querySelector( '#calendarBox' ) /* ) */;
      //var myTl = /* angular.element( */ document.querySelector( '#tweettexthold' ) /* ) */;
      //var myLl = /* angular.element( */ document.querySelector( '#tester' ) /* ) */;
      var myLl = /* angular.element( */ document.querySelector( '#output_text' ) /* ) */;
     
      myLl.innerHTML = "";
     for(var i = 0; i < this.tweetIds.length; i++){
        let tweetelement = this.tweetIds[i];
        let tweettexts = this.tweettext[i];
        let tweetuser = this.tweetuser[i];
        let tweethandle = this.tweethandle[i];
        let tweetdate = this.tweetdate[i];
        

        myLl.innerHTML += '<blockquote class="twitter-tweet tw-align-center " data-conversation="none" data-lang="en"><p lang="en" dir="ltr">'+tweettexts+'</p>&mdash; '+tweetuser+' (@'+tweethandle+') <a href="https://twitter.com/'+tweethandle+'/status/'+tweetelement+'">'+tweetdate+'</a></blockquote>';

        //myLl.innerHTML += '<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">'+tweettexts+'</p><a href="https://twitter.com/realDonaldTrump/status/'+tweetelement+'">test</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
        //myEl.innerHTML += "<p>"+tweet"</p></br>";
        //myEl.innerHTML += "<ngx-tweet tweetId="+tweetelement+"></ngx-tweet></br>";
        //myEl.append("<ngx-tweet tweetId="+tweetelement+"></ngx-tweet></br>");
        
     }
     twttr.widgets.load();
     
    });
    //Is this needed? Not sure. If issues with searching multiple times. uncomment below
    //setTimeout(() => { hellosubscription.unsubscribe(); }, 10000);
  }

  constructor(private myTaskService: HelloService, private router: Router,private mySlurService: SlursService,) { }

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
