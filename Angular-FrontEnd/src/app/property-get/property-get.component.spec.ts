import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyGetComponent } from './property-get.component';

describe('PropertyGetComponent', () => {
  let component: PropertyGetComponent;
  let fixture: ComponentFixture<PropertyGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyGetComponent]
    });
    fixture = TestBed.createComponent(PropertyGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
