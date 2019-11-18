import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from '../analytics.service';
import { Stats } from '../stats';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  result = 'Output holder';
  slurs = '';
  clientHello: Stats = new Stats();
  numSlurs = ' ';
  //testranks = [];
  //testranks = [{name: 'test'},{name: 'hi'}];

  getHello(): void {
    console.log("hi");
    //sends value from search bar to server
    //and displays the value it returns
    this.myTaskService.getstats().subscribe((serverHello: Stats) => {      
      //this stuff is asynchronous
      this.clientHello = serverHello;
      console.log(this.clientHello);
      this.result = this.clientHello.Connections;
      this.slurs = this.clientHello.Slurs;
      //let stringify = JSON.parse(this.clientHello.Ranks);
      //console.log(this.);
      for(var i = 0; i < this.clientHello.Ranks.length; i++) {
        //console.log(this.clientHello.Ranks[i]);
        let curr = this.clientHello.Ranks[i];
        let node = document.createElement("LI");
        let textnode = document.createTextNode("Handle:"+curr._id+" Count:"+curr.count);
        node.appendChild(textnode);
        document.getElementById("rankings").appendChild(node);
      }     
    });
  }

  constructor(private myTaskService: AnalyticsService, private router: Router) { }

  ngOnInit() {
    //this.clientHello.value = "default";
    //this.clientHello._id = '00000';
    }
    ngAfterViewInit(): void {
      this.getHello();
    }

}
