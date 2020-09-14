import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgridexampleComponent } from './agridexample.component';

describe('AgridexampleComponent', () => {
  let component: AgridexampleComponent;
  let fixture: ComponentFixture<AgridexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgridexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgridexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
