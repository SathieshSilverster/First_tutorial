import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeveragesPage } from './beverages.page';

describe('BeveragesPage', () => {
  let component: BeveragesPage;
  let fixture: ComponentFixture<BeveragesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeveragesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeveragesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
