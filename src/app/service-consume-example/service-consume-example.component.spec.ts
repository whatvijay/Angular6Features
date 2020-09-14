import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceConsumeExampleComponent } from './service-consume-example.component';

describe('ServiceConsumeExampleComponent', () => {
  let component: ServiceConsumeExampleComponent;
  let fixture: ComponentFixture<ServiceConsumeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceConsumeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceConsumeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
