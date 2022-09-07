import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalTabbedCardComponent } from './universal-tabbed-card.component';

describe('UniversalTabbedCardComponent', () => {
  let component: UniversalTabbedCardComponent;
  let fixture: ComponentFixture<UniversalTabbedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversalTabbedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalTabbedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
