import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferWhenComponent } from './buffer-when.component';

describe('BufferWhenComponent', () => {
  let component: BufferWhenComponent;
  let fixture: ComponentFixture<BufferWhenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BufferWhenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BufferWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
