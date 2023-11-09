import { Component } from '@angular/core';

interface ServiceData {
  title: string;
  aboutPoints: string[];
}

export interface CommentData {
  author: string;
  content: string;
}

export interface FaqItemData {
  title: string;
  content: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [],
})
export class HomeComponent {
  public services: ServiceData[] = [
    {
      title: 'Transplante Capilar FUE (Extração de Unidades Foliculares):',
      aboutPoints: [
        'Este método avançado é minimamente invasivo e envolve a extração de unidades foliculares individuais de uma área doadora para serem transplantadas nas áreas afetadas.',
        'Resultados naturais, recuperação mais rápida e menor desconforto pós-operatório.',
      ],
    },
    {
      title: 'Transplante Capilar FUT (Tira Folicular) - Técnica da Tira:',
      aboutPoints: [
        'Neste procedimento, uma faixa de couro cabeludo é removida da área doadora e as unidades foliculares são separadas e transplantadas nas áreas necessárias.',
        'Adequado para pacientes que necessitam de grande quantidade de enxertos.',
      ],
    },
    {
      title: 'PRP (Plasma Rico em Plaquetas) para o Couro Cabeludo:',
      aboutPoints: [
        'Uma terapia inovadora que utiliza o próprio sangue do paciente para estimular o crescimento capilar.',
      ],
    },
  ];

  public comments: CommentData[] = [
    {
      author: 'João Carlos',
      content:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
    {
      author: 'Eduardo Meira',
      content:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
    {
      author: 'Jorge Ferreira',
      content:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
  ];

  public faqItens: FaqItemData[] = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];
}
