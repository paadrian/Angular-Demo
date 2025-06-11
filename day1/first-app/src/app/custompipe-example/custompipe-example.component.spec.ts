import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipeExampleComponent } from './custompipe-example.component';

describe('CustompipeExampleComponent', () => {
  let component: CustomPipeExampleComponent;
  let fixture: ComponentFixture<CustomPipeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomPipeExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPipeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
