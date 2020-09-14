import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialexamplesComponent } from './materialexamples.component';

describe('MaterialexamplesComponent', () => {
  let component: MaterialexamplesComponent;
  let fixture: ComponentFixture<MaterialexamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialexamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialexamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
