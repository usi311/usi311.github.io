import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {
  interests: string[] = [
    'Futbol  |',
    ' Video Juegos |',
    ' Desarrollo web |',
    ' Naturaleza |',
    ' Ciclismo',
  ];
}
