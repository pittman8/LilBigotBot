import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from '../search/search.component';
import { AnalyticsComponent } from './analytics.component';
import { ResourcesComponent } from '../resources/resources.component';

import {FormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

describe('AnalyticsComponent', () => {
  let component: AnalyticsComponent;
  let fixture: ComponentFixture<AnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent, AnalyticsComponent, ResourcesComponent ],
      imports: [ FormsModule, HttpClientModule, AppRoutingModule ]
    });
    TestBed.compileComponents();
    // .compileComponents();
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
