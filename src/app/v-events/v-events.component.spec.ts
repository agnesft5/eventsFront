import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VEventsComponent } from './v-events.component';

describe('VEventsComponent', () => {
  let component: VEventsComponent;
  let fixture: ComponentFixture<VEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
