import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HirejobsComponent } from './hirejobs.component';

describe('HirejobsComponent', () => {
  let component: HirejobsComponent;
  let fixture: ComponentFixture<HirejobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HirejobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HirejobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
