import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { name: 'Control de Versiones', value: 90 },
    { name: 'Arquitectura de Software', value: 50},
    { name: 'Aprendizaje Autonomo', value: 75 },
    { name: 'Gestion del Tiempo', value: 80 },
    { name: 'Desarrollo Web', value: 70 },
    { name: 'Lenguajes de Programacion', value: 70}
  ];
}
