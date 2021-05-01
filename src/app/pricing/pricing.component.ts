import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit {
  data: any = [
    { header: 'Global standard business Plan starting', price: 'N14,590' },
    {
      header: 'Financial Modelling with 5 years financial projection',
      price: 'N50,000',
      features: [
        'source of funding',
        'acquisition of assets',
        'cash inflow and outflow analysis',
        'depreciation and valuation of assets',
        'financial structuring',
        'long term capital expenditures',
        'income statement',
        'statement of financial position',
      ],
    },
    {
      header: 'Data driven business plan and growth strategy',
      price: 'N25,750',
    },
    { header: 'Investor analytics pitch deck starting', price: 'N11,300' },
    { header: 'Product and Business Development starting', price: 'N31,800' },
    {
      header: 'Market research and market strategy starting',
      price: 'N22,400',
    },
    { header: 'Marketing consulting per hr starting', price: 'N15,000' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
