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
  clientHello: Stats = new Stats();
  result = '';
  slurs = '';
  numSlurs = '';

  getHello(): void { //called by onInit()
    //appends text to display rankings
    //this was recycled from the search component
    //it uses the Stats type instead of Hello
    // Stats {
    //   _id: String;
    //    value: string;
    //    Connections: string;
    //    Slurs: string;
    //    Ranks: any;
    //  }
    //but is otherwise pretty similar.

    this.myTaskService.getstats().subscribe((serverHello: Stats) => {      
      this.clientHello = serverHello;
      this.result = this.clientHello.Connections;
      this.slurs = this.clientHello.Slurs;

      for(var i = 0; i < this.clientHello.Ranks.length; i++) {
          let curr = this.clientHello.Ranks[i];
          let node = document.createElement("LI");
          let textnode = document.createTextNode(curr._id+" was search "+curr.count+" times");
          node.appendChild(textnode);
          document.getElementById("rankings").appendChild(node);  
        }           
    });
  }

  constructor(private myTaskService: AnalyticsService, private router: Router) { }

  ngOnInit() {
    }
    ngAfterViewInit(): void {
      this.getHello();
    }

}
