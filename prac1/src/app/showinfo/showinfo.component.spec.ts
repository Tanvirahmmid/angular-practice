import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowinfoComponent } from './showinfo.component';

describe('ShowinfoComponent', () => {
  let component: ShowinfoComponent;
  let fixture: ComponentFixture<ShowinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowinfoComponent]
    });
    fixture = TestBed.createComponent(ShowinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
