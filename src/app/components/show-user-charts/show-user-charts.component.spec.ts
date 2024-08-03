import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserChartsComponent } from './show-user-charts.component';

describe('ShowUserChartsComponent', () => {
  let component: ShowUserChartsComponent;
  let fixture: ComponentFixture<ShowUserChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowUserChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowUserChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
