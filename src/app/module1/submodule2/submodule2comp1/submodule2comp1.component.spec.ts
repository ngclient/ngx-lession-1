import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submodule2comp1Component } from './submodule2comp1.component';

describe('Submodule2comp1Component', () => {
  let component: Submodule2comp1Component;
  let fixture: ComponentFixture<Submodule2comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submodule2comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submodule2comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
