import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFeedComponent } from './content-feed.component';

describe('ContentFeedComponent', () => {
  let component: ContentFeedComponent;
  let fixture: ComponentFixture<ContentFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
