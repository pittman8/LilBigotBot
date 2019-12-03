import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from '../search/search.component';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { ResourcesComponent } from './resources.component';

import {FormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';


describe('ResourcesComponent', () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent, AnalyticsComponent, ResourcesComponent ],
      imports: [ FormsModule, HttpClientModule, AppRoutingModule ]
    });
    TestBed.compileComponents();
    // .compileComponents();
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
