import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KantorComponent } from './kantor.component';

describe('KantorComponent', () => {
  let component: KantorComponent;
  let fixture: ComponentFixture<KantorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KantorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KantorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
