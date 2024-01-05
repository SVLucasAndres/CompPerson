import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Ejer2Page } from './ejer2.page';

describe('Ejer2Page', () => {
  let component: Ejer2Page;
  let fixture: ComponentFixture<Ejer2Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ejer2Page],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ejer2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
