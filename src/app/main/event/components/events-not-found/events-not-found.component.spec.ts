import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsNotFoundComponent } from './events-not-found.component';

describe('EventsNotFoundComponent', () => {
  let component: EventsNotFoundComponent;
  let fixture: ComponentFixture<EventsNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
