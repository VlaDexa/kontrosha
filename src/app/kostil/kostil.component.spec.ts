import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KostilComponent } from './kostil.component';

describe('KostilComponent', () => {
  let component: KostilComponent;
  let fixture: ComponentFixture<KostilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KostilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KostilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
