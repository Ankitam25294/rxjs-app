import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampletimeOperatorComponent } from './sampletime-operator.component';

describe('SampletimeOperatorComponent', () => {
  let component: SampletimeOperatorComponent;
  let fixture: ComponentFixture<SampletimeOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampletimeOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampletimeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
