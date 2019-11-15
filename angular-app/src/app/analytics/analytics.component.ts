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

  getHello(): void {
    console.log("hi");
    //sends value from search bar to server
    //and displays the value it returns
    this.myTaskService.getstats().subscribe((serverHello: Stats) => {      
      //this stuff is asynchronous
      this.clientHello = serverHello;
      //console.log(serverHello);
      this.result = this.clientHello.Connections;
      this.slurs = this.clientHello.Slurs;
      
     
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
