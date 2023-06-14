import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAddComponent } from './agent-add.component';

describe('AgentAddComponent', () => {
  let component: AgentAddComponent;
  let fixture: ComponentFixture<AgentAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentAddComponent]
    });
    fixture = TestBed.createComponent(AgentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
