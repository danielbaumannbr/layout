import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  requisicao=[
    {
      tecnologia:'HTML',
      descricao:'Estrutura da página'
    },
    {
      tecnologia:'CSS',
      descricao:'Estilização da página'
    },
    {
      tecnologia:'JavaScript',
      descricao:'Lógica da página'
    }
  ];
}
