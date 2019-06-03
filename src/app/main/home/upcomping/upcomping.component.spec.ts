import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcompingComponent } from './upcomping.component';

describe('UpcompingComponent', () => {
  let component: UpcompingComponent;
  let fixture: ComponentFixture<UpcompingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcompingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcompingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
