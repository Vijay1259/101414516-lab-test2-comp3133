import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Mission } from '../../models/mission.model';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './missionfilter.component.html'
})
export class MissionfilterComponent {
  year = '';
  @Output() filter = new EventEmitter<Mission[]>();

  search() {
    const event = new CustomEvent<Mission[]>('filter');
    this.filter.emit(event.detail);
  }
}