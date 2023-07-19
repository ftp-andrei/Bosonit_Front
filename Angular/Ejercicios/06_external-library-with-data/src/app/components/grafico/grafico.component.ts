import { Component, ViewChild, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { GraficoService } from 'src/app/services/grafico.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
})
export class GraficoComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public opcionesGrafico: ChartConfiguration['options'] = {
    responsive: true,
  };

  public tipo: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  labels: string[] = [];

  public datosGrafico: ChartData<'bar'> = {
    labels: this.labels,
    datasets: [
      { data: [], label: 'Caso positivo', backgroundColor: ['#f73805'] },
      { data: [], label: 'Caso negativo', backgroundColor: ['#52bbf7'] },
    ],
  };

  constructor(private grafico: GraficoService) {}

  ngOnInit(): void {
    this.grafico.getStatesData().subscribe(({ array }) => {
      this.procesarDatos(array);
      this.chart?.update();
    });
  }

  private procesarDatos(array: any[]): void {
    array.forEach((e) => {
      this.labels.push(e.values.state);
      this.datosGrafico.datasets[0].data.push(e.values.positive);
      this.datosGrafico.datasets[1].data.push(e.values.negative);
    });
  }
}
