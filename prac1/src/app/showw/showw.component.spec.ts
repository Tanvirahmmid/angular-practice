import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowwComponent } from './showw.component';

describe('ShowwComponent', () => {
  let component: ShowwComponent;
  let fixture: ComponentFixture<ShowwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowwComponent]
    });
    fixture = TestBed.createComponent(ShowwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
