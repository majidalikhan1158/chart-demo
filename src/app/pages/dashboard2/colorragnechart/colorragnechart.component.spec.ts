import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorragnechartComponent } from './colorragnechart.component';

describe('ColorragnechartComponent', () => {
  let component: ColorragnechartComponent;
  let fixture: ComponentFixture<ColorragnechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorragnechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorragnechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
