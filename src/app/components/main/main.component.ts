import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
 @Input() dados = {
    nome: "sombra",
    idade: 35,
    cargo: "Desenvolvedor"
  }

}