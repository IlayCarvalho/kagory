import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from "./components/footer/footer.component"
import { MainComponent } from "./components/main/main.component"
import { Consumo } from './Consumo';
import { NgFor } from '@angular/common';
import { ConsumoService } from './services/consumo.service';

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

  protected listaCosmestico: Consumo[] = [];

  constructor( private servicoCosmetico: ConsumoService) {
    this.listandoCosmeticos();
  };

  listandoCosmeticos(): void {
    this.servicoCosmetico.consumoAPI().subscribe(lista => this.listaCosmestico = lista);

  };
}
