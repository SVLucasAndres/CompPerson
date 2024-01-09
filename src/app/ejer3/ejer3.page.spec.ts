import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejer3Page } from './ejer3.page';

describe('Ejer3Page', () => {
  let component: Ejer3Page;
  let fixture: ComponentFixture<Ejer3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ejer3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
