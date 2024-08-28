import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncVsObsComponent } from './func-vs-obs.component';

describe('FuncVsObsComponent', () => {
  let component: FuncVsObsComponent;
  let fixture: ComponentFixture<FuncVsObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncVsObsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncVsObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
