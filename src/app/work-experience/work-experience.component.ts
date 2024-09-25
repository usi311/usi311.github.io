import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExperience: Array<any> = [];

  ngOnInit(): void {
    let work1 = {
      fecha: "2020-2021",
      ubicacion: "Orizaba,ver",
      puesto: "Desarrollador Front-End",
      empresa: "Proyecto Escolar",
      logros: [
        { descripcion: "Desarrollo de una aplicación web para la gestión de tareas usando Angular" },
        { descripcion: "Implementación de una interfaz de usuario accesible y responsive" }
      ]
    };

    let work2 = {
      fecha: "2021-2022",
      ubicacion: "Orizaba,ver",
      puesto: "Desarrollador Back-End",
      empresa: "Hackathon Universitario",
      logros: [
        { descripcion: "Creación de un API RESTful para un sistema de reserva de salas de estudio" },
        { descripcion: "Integración de bases de datos con MongoDB y MySQL" }
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    console.log(this.workExperience);

  }
}

