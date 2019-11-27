import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from '../search/search.component';
import { AnalyticsComponent } from './analytics.component';
import { ResourcesComponent } from '../resources/resources.component';

import { AnalyticsService } from '../analytics.service';

import {FormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';

describe('AnalyticsComponent', () => {
  let component: AnalyticsComponent;
  let fixture: ComponentFixture<AnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent, AnalyticsComponent, ResourcesComponent ],
      imports: [ FormsModule, HttpClientModule, AppRoutingModule ],
      providers: [Injectable, AnalyticsService, NgModule]
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

describe('test test', function(){  
  let component: AnalyticsComponent;
  let fixture: ComponentFixture<AnalyticsComponent>;

  beforeEach(async function() {
    fixture = TestBed.createComponent(AnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // component.getHello();
    // setTimeout(() => {}, 2000)
    await component.getHello();
  });
  
  it('should work', () => {
    // component.getHello();
    expect(component.slurs).not.toBe('');            
  });
        
});  
