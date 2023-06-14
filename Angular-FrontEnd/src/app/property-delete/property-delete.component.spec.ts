import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDeleteComponent } from './property-delete.component';

describe('PropertyDeleteComponent', () => {
  let component: PropertyDeleteComponent;
  let fixture: ComponentFixture<PropertyDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyDeleteComponent]
    });
    fixture = TestBed.createComponent(PropertyDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
