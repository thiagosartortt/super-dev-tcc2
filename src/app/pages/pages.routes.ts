import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Pacotes } from './pacotes/pacotes';
import { AlunosList } from './alunos/list/list';
import { AlunoCreate } from './alunos/create/create';

export default [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }, 
  { path: 'dashboard', component: Dashboard },
  { path: 'alunos', component: AlunosList },
  { path: 'alunos/cadastro', component: AlunoCreate },
  { path: 'pacotes', component: Pacotes},
] as Routes;
