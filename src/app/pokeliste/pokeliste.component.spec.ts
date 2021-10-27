import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokelisteComponent } from './pokeliste.component';

describe('PokelisteComponent', () => {
  let component: PokelisteComponent;
  let fixture: ComponentFixture<PokelisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokelisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokelisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
