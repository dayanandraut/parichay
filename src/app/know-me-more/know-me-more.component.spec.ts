import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMeMoreComponent } from './know-me-more.component';

describe('KnowMeMoreComponent', () => {
  let component: KnowMeMoreComponent;
  let fixture: ComponentFixture<KnowMeMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowMeMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowMeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
