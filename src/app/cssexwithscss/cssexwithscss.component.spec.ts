import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssexwithscssComponent } from './cssexwithscss.component';

describe('CssexwithscssComponent', () => {
  let component: CssexwithscssComponent;
  let fixture: ComponentFixture<CssexwithscssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssexwithscssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssexwithscssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
