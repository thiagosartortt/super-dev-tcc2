import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Alunos } from './alunos/alunos';
import { Pacotes } from './pacotes/pacotes';

export default [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }, 
  { path: 'dashboard', component: Dashboard },
  { path: 'alunos', component: Alunos },
  { path: 'pacotes', component: Pacotes},
] as Routes;
