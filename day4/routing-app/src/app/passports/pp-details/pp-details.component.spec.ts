import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPDetailsComponent } from './pp-details.component';

describe('DetailsComponent', () => {
  let component: PPDetailsComponent;
  let fixture: ComponentFixture<PPDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PPDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PPDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
