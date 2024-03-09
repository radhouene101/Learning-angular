import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeComponentComponent } from './le-component.component';

describe('LeComponentComponent', () => {
  let component: LeComponentComponent;
  let fixture: ComponentFixture<LeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
