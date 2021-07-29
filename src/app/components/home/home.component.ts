import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from './PeriodicElement';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public option1: any;
  public option2: any;

  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor() { }

  ngOnInit(): void {
    this.initChart();
  }

  public initChart(): void {
    this.option1 = {
      title: {
        text: 'Imóveis',
        subtext: 'Imóveis pagos e em aberto',
        left: 'right'
      },
      legend: {
        bottom: 10,
        left: 'right',
        data: ['Pagos', 'Atrasados', 'Em data de pagamento']
      },
      series: [

        {
          type: 'pie',
          radius: '45%',
          center: ['85%', '40%'],
          selectedMode: 'single',
          data: [
            { value: 735, name: 'Pagos' },
            { value: 510, name: 'Atrasados' },
            { value: 335, name: 'Em data de pagamento' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    this.option2 = {
      xAxis: {
        type: 'category',
        data: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [1, 2, 3, 3, 2, 1, 3, 2, 3, 4, 1, 2],
        type: 'bar',
        radius: '75%',
        center: ['90%', '80%'],
      }]
    };
  }
}
