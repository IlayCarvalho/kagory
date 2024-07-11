import { NgFor } from '@angular/common';
import { Component, Input} from '@angular/core';
import { Consumo } from '../../Consumo';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() id: number = 0;
  @Input() nome: string = '';
  @Input() descricao: string = '';
  @Input() data_validade: string = '';
  @Input() img: string = '';
  @Input() cor: string = '';
}
