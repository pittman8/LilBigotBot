import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HelloService } from '../hello.service';
import { Hello } from '../Hello';
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


clear(): void {
  document.getElementById("slur_list").innerHTML = '';
}
getSlurList(): void {

  //  //and displays the value it returns
  //  this.myTaskService.sayHello(this.clientHello).subscribe((serverHello: Hello) => { 
  // this.clientHello = serverHello;
  //     //console.log(serverHello);
  //     this.slurs = this.clientHello.value.toString();
  //   });
  var slurArray = ['fag', 'faggot', 'dyke', 'homo', 'sodomite', 'great'];
  this.slurArrayString = slurArray.join(', ');
  setTimeout(this.clear, 5000);
  // for (var i=0; i < slurArray.length; i++) {
  // var opt = slurArray[i];
  // var el = document.createElement("option");
  // el.textContent = opt;
  //   el.value = opt;
  //   select.appendChild(el);
  // }
}


  getHello(): void {
    //sends value from search bar to server
    //and displays the value it returns
    this.clientHello.value = this.input_search;
    this.myTaskService.sayHello(this.clientHello).subscribe((serverHello: Hello) => {      
      //this stuff is asynchronous
      this.clientHello = serverHello;
      console.log(serverHello.value);
      //this.result = this.clientHello.value;
      for (var i = 0; i < this.result.length; i++) {
        
      }
      //console.log(serverHello.value);
      var stringify = JSON.parse(serverHello.value);
      // console.log(stringify);
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
       console.log(this.tweetIds);
      //this.result = this.clientHello.value;
      this.numSlurs = this.tweetIds.length.toString();
      //this.embedded = this.idArray[0];

      var myEl = /* angular.element( */ document.querySelector( '#calendarBox' ) /* ) */;
      var myTl = /* angular.element( */ document.querySelector( '#tweettexthold' ) /* ) */;
      //var myLl = /* angular.element( */ document.querySelector( '#tester' ) /* ) */;
      var myLl = /* angular.element( */ document.querySelector( '#output_text' ) /* ) */;
     
      myLl.innerHTML = "";

      for(var i = 0; i < this.tweettext.length; i++){
        let tweetelement = this.tweettext[i];
        
        
        //myTl.innerHTML += "<p>"+tweetelement+"</p></br>";
        //myEl.innerHTML += "<ngx-tweet tweetId="+tweetelement+"></ngx-tweet></br>";
        //myEl.append("<ngx-tweet tweetId="+tweetelement+"></ngx-tweet></br>");
     }

     for(var i = 0; i < this.tweettext.length; i++){
      let tweetelement = this.tweettext[i];
      
      
      //myLl.innerHTML += '<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">'+tweetelement+'</p>&mdash; Donald J. Trump (@realDonaldTrump) <a href="https://twitter.com/realDonaldTrump/status/1190079193582899200?ref_src=twsrc%5Etfw">November 1, 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
      //myEl.innerHTML += "<ngx-tweet tweetId="+tweetelement+"></ngx-tweet></br>";
      //myEl.append("<ngx-tweet tweetId="+tweetelement+"></ngx-tweet></br>");
   }


     for(var i = 0; i < this.tweetIds.length; i++){
        let tweetelement = this.tweetIds[i];
        let tweettexts = this.tweettext[i];
        let tweetuser = this.tweetuser[i];
        let tweethandle = this.tweethandle[i];
        let tweetdate = this.tweetdate[i];
        

        myLl.innerHTML += '<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">'+tweettexts+'</p>&mdash; '+tweetuser+' (@'+tweethandle+') <a href="https://twitter.com/'+tweethandle+'/status/'+tweetelement+'">'+tweetdate+'</a></blockquote>';

        //myLl.innerHTML += '<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">'+tweettexts+'</p><a href="https://twitter.com/realDonaldTrump/status/'+tweetelement+'">test</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
        //myEl.innerHTML += "<p>"+tweet"</p></br>";
        //myEl.innerHTML += "<ngx-tweet tweetId="+tweetelement+"></ngx-tweet></br>";
        //myEl.append("<ngx-tweet tweetId="+tweetelement+"></ngx-tweet></br>");
        
     }
     twttr.widgets.load();
    });
  }

  constructor(private myTaskService: HelloService, private router: Router,) { }

  ngOnInit() {
    this.clientHello.value = "default";
    this.clientHello._id = '00000';
    //this.loadScripts();
    }

    ngAfterViewInit(): void {
      // @ts-ignore
      //twttr.widgets.load();
  }

  
  ngDoCheck(): void {
    //console.log("tzeench");
    //twttr.widgets.load();
    //this.loadScripts();
  }
  
  ngOnChanges() {
    
    //console.log("tzeench");
    
  }

}
