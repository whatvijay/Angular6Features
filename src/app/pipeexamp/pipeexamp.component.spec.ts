import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeexampComponent } from './pipeexamp.component';

describe('PipeexampComponent', () => {
  let component: PipeexampComponent;
  let fixture: ComponentFixture<PipeexampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeexampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeexampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
