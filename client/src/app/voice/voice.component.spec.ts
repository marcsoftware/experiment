import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceComponent } from './voice.component';

import {AnnyangService} from '../annyang.service'
declare var annyang:any
describe('VoiceComponent', () => {
  let component: VoiceComponent;
  let fixture: ComponentFixture<VoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
