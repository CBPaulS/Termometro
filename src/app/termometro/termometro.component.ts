import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-termometro',
  templateUrl: './termometro.component.html',
  styleUrls: ['./termometro.component.scss'],
})
export class TermometroComponent implements OnInit {
  @Input() porcentaje: number = 0; // Porcentaje de llenado del termómetro
  public barColor: string = ''; // Color de la barra

  constructor() {}

  ngOnInit() {
    this.setBarColor();
  }

  setBarColor() {
    if (this.porcentaje <= 20) {
      this.barColor = 'blue'; // Azul para valores bajos
    } else if (this.porcentaje <= 50) {
      this.barColor = 'green'; // Verde para valores medianos
    } else {
      this.barColor = 'red'; // Rojo para valores altos
    }
  }
}
