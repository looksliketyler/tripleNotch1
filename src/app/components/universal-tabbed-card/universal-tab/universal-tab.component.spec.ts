import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalTabComponent } from './universal-tab.component';

describe('UniversalTabComponent', () => {
  let component: UniversalTabComponent;
  let fixture: ComponentFixture<UniversalTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversalTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
