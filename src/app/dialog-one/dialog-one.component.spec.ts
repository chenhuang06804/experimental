import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOneComponent } from './dialog-one.component';

describe('DialogOneComponent', () => {
  let component: DialogOneComponent;
  let fixture: ComponentFixture<DialogOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
