import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingdanielComponent } from './testingdaniel.component';

describe('TestingdanielComponent', () => {
  let component: TestingdanielComponent;
  let fixture: ComponentFixture<TestingdanielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingdanielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingdanielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
