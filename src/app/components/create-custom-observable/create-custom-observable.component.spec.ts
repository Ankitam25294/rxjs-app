import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomObservableComponent } from './create-custom-observable.component';

describe('CreateCustomObservableComponent', () => {
  let component: CreateCustomObservableComponent;
  let fixture: ComponentFixture<CreateCustomObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCustomObservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCustomObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
