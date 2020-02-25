import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressingComponent } from './progressing.component';

describe('ProgressingComponent', () => {
  let component: ProgressingComponent;
  let fixture: ComponentFixture<ProgressingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
