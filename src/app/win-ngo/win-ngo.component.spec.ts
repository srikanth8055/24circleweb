import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinNGoComponent } from './win-ngo.component';

describe('WinNGoComponent', () => {
  let component: WinNGoComponent;
  let fixture: ComponentFixture<WinNGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinNGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinNGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
