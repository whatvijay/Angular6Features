import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsexampleComponent } from './formsexample.component';

describe('FormsexampleComponent', () => {
  let component: FormsexampleComponent;
  let fixture: ComponentFixture<FormsexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
