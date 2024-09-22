import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  achievements = [
    {
      title: 'Desarrollo de una aplicación para la gestión de tareas como proyecto personal',
      year: '2022',
      description: 'Este proyecto personal me permitió aprender sobre la organización de tareas.'
    },
    {
      title: 'Colaboración en un proyecto de investigación sobre inteligencia artificial',
      year: '2023',
      description: 'Participé activamente en la investigación de modelos de IA aplicados a datos financieros.'
    },
    {
      title: 'Participación en el seminario universitario sobre Metodologías Ágiles',
      year: '2023',
      description: 'Aprendí sobre la implementación de Scrum y Kanban en proyectos de desarrollo de software.'
    }
  ];
}
