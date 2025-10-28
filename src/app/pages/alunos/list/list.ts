import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";
import { AlunoResponse } from '@/models/alunos.dto';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [ButtonModule, RouterLink, TableModule, CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class AlunosList {
alunos: AlunoResponse[];

constructor(){
  this.alunos = [
    {
      id: 1,
      nome: "Pedro",
      dataNascimento: new Date(1990, 6, 18),
      cpf: "123.123.412-20",
      telefone: "(47) 91289-1299"
    }
  ]
}
}
