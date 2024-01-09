import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejer21Page } from './ejer21.page';

describe('Ejer21Page', () => {
  let component: Ejer21Page;
  let fixture: ComponentFixture<Ejer21Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ejer21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
