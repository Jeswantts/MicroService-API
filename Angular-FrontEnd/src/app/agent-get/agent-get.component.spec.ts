import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentGetComponent } from './agent-get.component';

describe('AgentGetComponent', () => {
  let component: AgentGetComponent;
  let fixture: ComponentFixture<AgentGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentGetComponent]
    });
    fixture = TestBed.createComponent(AgentGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
