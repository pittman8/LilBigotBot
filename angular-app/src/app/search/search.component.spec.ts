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

  it('should click search button', async(() => {
    spyOn(component, 'getHello');
  
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.getHello).toHaveBeenCalled();
    });
  }));

  it('should click slur button', async(() => {
    spyOn(component, 'getSlurList');
  
    let button = fixture.debugElement.nativeElement.querySelector('#slurlink');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.getSlurList).toHaveBeenCalled();
    });
  }));

  it('should check that slur list is displayed', async(() => {
    let slurstring = "hello, test"
  
    component.slurArrayString = slurstring;
    
    let list = fixture.debugElement.nativeElement.querySelector('#slurstrings');

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(list.textContent.trim()).toBe(slurstring )
    });
  }));


});
