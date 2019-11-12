import { Component, OnInit, Input } from '@angular/core';
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
  input_search = 'realdonaldtrump';
  result = 'Output holder';
  clientHello: Hello = new Hello();
  IdArray = [];
  numSlurs = ' ';
tweetIds = [];
tweettext = [];

  getHello(): void {
    //sends value from search bar to server
    //and displays the value it returns
    this.clientHello.value = this.input_search;
    this.myTaskService.sayHello(this.clientHello).subscribe((serverHello: Hello) => {      
      //this stuff is asynchronous
      this.clientHello = serverHello;
      console.log(serverHello.value);
      this.result = this.clientHello.value;
      for (var i = 0; i < this.result.length; i++) {
        
      }
      //console.log(serverHello.value);
      var stringify = JSON.parse(serverHello.value);
      // console.log(stringify);
     //  console.log(stringify.statuses[0].id);
       //console.log(stringify.statuses.length);
       this.tweetIds = [];
       for(var i = 0; i < stringify.statuses.length; i++) {
        // console.log(stringify.statuses[i].id);
         this.tweetIds.push(stringify.statuses[i].id);
         this.tweettext.push(stringify.statuses[i].text);
       }
      //  console.log(this.theIds);
      //  for(var i = 0; i < this.theIds.length; i++) {
      //     this.tweetIds.push(this.theIds[i]);
      //  }
       console.log(this.tweetIds);
      this.result = this.clientHello.value;
      this.numSlurs = this.tweetIds.length.toString();
      //this.embedded = this.idArray[0];

      var myEl = /* angular.element( */ document.querySelector( '#calendarBox' ) /* ) */;
      var myTl = /* angular.element( */ document.querySelector( '#tweettexthold' ) /* ) */;
      var myLl = /* angular.element( */ document.querySelector( '#tester' ) /* ) */;
     
      for(var i = 0; i < this.tweettext.length; i++){
        let tweetelement = this.tweettext[i];
        
        
        myTl.innerHTML += "<p>"+tweetelement+"</p></br>";
        //myEl.innerHTML += "<ngx-tweet tweetId="+tweetelement+"></ngx-tweet></br>";
        //myEl.append("<ngx-tweet tweetId="+tweetelement+"></ngx-tweet></br>");
     }

     for(var i = 0; i < this.tweettext.length; i++){
      let tweetelement = this.tweettext[i];
      
      
      myLl.innerHTML += '<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">'+tweetelement+'</p>&mdash; Donald J. Trump (@realDonaldTrump) <a href="https://twitter.com/realDonaldTrump/status/1190079193582899200?ref_src=twsrc%5Etfw">November 1, 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
      //myEl.innerHTML += "<ngx-tweet tweetId="+tweetelement+"></ngx-tweet></br>";
      //myEl.append("<ngx-tweet tweetId="+tweetelement+"></ngx-tweet></br>");
   }


     for(var i = 0; i < this.tweetIds.length; i++){
        let tweetelement = this.tweetIds[i];
        
        
        //myEl.innerHTML += "<p>"+tweet"</p></br>";
        myEl.innerHTML += "<ngx-tweet tweetId="+tweetelement+"></ngx-tweet></br>";
        //myEl.append("<ngx-tweet tweetId="+tweetelement+"></ngx-tweet></br>");
     }
    });
  }

  constructor(private myTaskService: HelloService, private router: Router) { }

  ngOnInit() {
    this.clientHello.value = "default";
    this.clientHello._id = '00000';
    }

    ngAfterViewInit(): void {
      // @ts-ignore
      twttr.widgets.load();
  }

  
  ngDoCheck(): void {
    //console.log("tzeench");
    //twttr.widgets.load();
  }
  
  ngOnChanges() {
    
    //console.log("tzeench");
    
  }

}
