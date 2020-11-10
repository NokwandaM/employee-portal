import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCategotyComponent } from './new-categoty.component';

describe('NewCategotyComponent', () => {
  let component: NewCategotyComponent;
  let fixture: ComponentFixture<NewCategotyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCategotyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCategotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
