import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WelcomeComponent } from './welcome.component';
import { VERSION } from '@angular/core';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule, FormsModule ],
      declarations: [WelcomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('pageTitle should be "Welcome to the Cheesecake Fool!"', () => {
    expect(component.pageTitle).toBe('Welcome to the Cheesecake Fool!');
  });

  it('pageTitle should be "Welcome to the Cheesecake Fool!"', () => {
    expect(component.ver).toBe(VERSION.full);
  });
});
