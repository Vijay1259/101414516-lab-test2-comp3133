import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { SpacexService } from '../../services/spacex.service';
import { Mission } from '../../models/mission.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './missiondetails.component.html'
})
export class MissiondetailsComponent implements OnInit {
  mission!: Mission;

  constructor(private route: ActivatedRoute, private spacexService: SpacexService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.spacexService.getMissionByFlightNumber(+id).subscribe((data) => {
        this.mission = data;
      });
    }
  }
}