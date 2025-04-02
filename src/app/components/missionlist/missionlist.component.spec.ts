import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionlistComponent } from './missionlist.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';

describe('MissionlistComponent', () => {
  let component: MissionlistComponent;
  let fixture: ComponentFixture<MissionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MissionlistComponent,
        CommonModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MissionfilterComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MissionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});