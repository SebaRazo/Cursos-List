import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/curso-dto';
import { cursos } from './mock';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrl: './tabla-cursos.component.css',
})
export class TablaCursosComponent implements OnInit {
  public cursos?: Curso[];

  ngOnInit(): void {
    this.cursos = cursos;
  }
}
