import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subsubcomp1Component } from './subsubcomp1.component';

describe('Subsubcomp1Component', () => {
  let component: Subsubcomp1Component;
  let fixture: ComponentFixture<Subsubcomp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subsubcomp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subsubcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
