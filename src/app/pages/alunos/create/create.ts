import { AlunoCadastroRequest } from '@/models/alunos.dto';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

// FormsModule => ngModel

@Component({
  selector: 'app-create',
  imports: [FormsModule, InputTextModule, InputMaskModule, DatePickerModule, ButtonModule, RouterLink, ],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class AlunoCreate {
  form: AlunoCadastroRequest;

  constructor(){
    this.form = {
      nome: "",
      cpf: "",
      dataNascimento: null,
      telefone: ""
    }
  }
}
