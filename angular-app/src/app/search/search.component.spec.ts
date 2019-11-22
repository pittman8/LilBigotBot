import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { ResourcesComponent } from '../resources/resources.component';


import {FormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent, AnalyticsComponent, ResourcesComponent ],
      imports: [ FormsModule, HttpClientModule, AppRoutingModule ]
    });
    TestBed.compileComponents();
    // .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display tweet', () => {
    let compiled = fixture.debugElement.nativeElement;
    let myLI = compiled.querySelector('#output_text');
    myLI.innerHTML = '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I have been watching people making phone calls my entire life. My hearing is, and has been, great. Never have I been watching a person making a call, which was not on speakerphone, and been able to hear or understand a conversation. I’ve even tried, but to no avail. Try it live!</p>&mdash; Donald J. Trump (@realDonaldTrump) <a href="https://twitter.com/realDonaldTrump/status/1197521967777222656?ref_src=twsrc%5Etfw">November 21, 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
    expect(compiled.querySelector('#output_text').textContent).toContain('phone calls');
  })

});
