import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from "./components/footer/footer.component"
import { MainComponent } from "./components/main/main.component"
import { Consumo } from './Consumo';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    MainComponent,
    FooterComponent,
    NgFor
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kagoryc';

  protected listaCosmestico: Consumo[] = [
    {
      id: 1,
      nome: "Sombra",
      descricao: "Sombra Rosa",
      data_validade: "04/2025",
      img: "https://i.postimg.cc/Gh2QHbw4/r.jpg",
      cor: "42445"
    },
  ]

}
