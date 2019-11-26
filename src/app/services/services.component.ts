import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  titles = [
    'HAIR DESIGN',
    'STYLE SERVICES',
    'HAIR COLOR',
    'LASHES',
    'WAXING'
  ];

  design = [
    'Women\'\s Haircut',
    'Men\'\s Haircut',
    'Child\'s Haircut',
    'Bang Trim',
    'Cut With Color Service'
  ];
  designPrices =[
    '35',
    '20',
    '15',
    '10',
    '25'
  ];

  style = [
    'Blowout',
    'Iron Style',
    'Special Occasion Up-Do',
    'Conditioning Treatment'
  ];
  stylePrices = [
    '25',
    '20',
    '65',
    '28'
  ];

  color = [
    'Color Retouch',
    'All Over Color',
    'Full Highlight',
    'Partial Highlight',
    'Mini-Partial Highlight',
    'Balayage',
    'Balayage Retouch',
    'Toner',
    'Root Shadow',
    'Additional Color'
  ];
  colorPrices = [
    '40+',
    '60+',
    '85+',
    '75+',
    '65+',
    '110+',
    '80+',
    '15',
    '15',
    '10'
  ];

  lashes = [
    'Classic Full Set',
    'Classic Fill'
  ];
  lashesPrices = [
    '70',
    '40'
  ];

  waxing = [
    'Brows',
    'Lip'
  ];
  waxingPrices = [
    '10',
    '6'
  ];

  constructor() { }

  ngOnInit() {
  }

}
