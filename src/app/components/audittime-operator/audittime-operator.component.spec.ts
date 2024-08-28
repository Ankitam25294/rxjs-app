import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudittimeOperatorComponent } from './audittime-operator.component';

describe('AudittimeOperatorComponent', () => {
  let component: AudittimeOperatorComponent;
  let fixture: ComponentFixture<AudittimeOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudittimeOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudittimeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
