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
      descricao:'O HTML (HyperText Markup Language ou Linguagem de Marcação de Hipertexto) é a linguagem padrão utilizada para estruturar e organizar o conteúdo de páginas na web. Ele funciona como o "esqueleto" de um site, definindo onde ficam textos, imagens, links e outros elementos.'
    },
    {
      tecnologia:'CSS',
      descricao:'Se o HTML é o esqueleto, o CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é a "roupa" e a maquiagem da sua página. Ele é usado para definir o design, as cores, as fontes e o layout dos elementos que você criou com HTML'
    },
    {
      tecnologia:'JavaScript',
      descricao:'Se o HTML é o esqueleto e o CSS é a roupa, o JavaScript (JS) é o cérebro. Ele é a linguagem de programação que traz vida, interatividade e dinamismo para as páginas da web.'
    }
  ];
}
