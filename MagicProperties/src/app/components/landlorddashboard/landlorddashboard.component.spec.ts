import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlorddashboardComponent } from './landlorddashboard.component';

describe('LandlorddashboardComponent', () => {
  let component: LandlorddashboardComponent;
  let fixture: ComponentFixture<LandlorddashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlorddashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlorddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
