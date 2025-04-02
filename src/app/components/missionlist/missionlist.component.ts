import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { Mission } from '../../models/mission.model';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MissionfilterComponent
  ]
})
export class MissionlistComponent {
  missions: Mission[] = [];

  viewDetails(flightNumber: number | string) {
    console.log('Viewing details for flight number:', flightNumber);
  }

  constructor() {}
}