import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoDetailPage } from './info-detail.page';

describe('InfoDetailPage', () => {
  let component: InfoDetailPage;
  let fixture: ComponentFixture<InfoDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
