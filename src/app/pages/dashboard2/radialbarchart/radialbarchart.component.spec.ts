import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialbarchartComponent } from './radialbarchart.component';

describe('RadialbarchartComponent', () => {
  let component: RadialbarchartComponent;
  let fixture: ComponentFixture<RadialbarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadialbarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialbarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
