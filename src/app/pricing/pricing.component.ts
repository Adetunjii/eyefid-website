import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit {
  customOptions: OwlOptions = {
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    loop: false,
    margin: 150,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    dotsData: true,
    navSpeed: 600,
    navText: ['<div class="carousel-sliders-btn"></div>', ''],
    nav: true,
  };

  dotContent = '<div class="carousel-sliders-btn"></div>';

  data: any = [
    {
      header: 'Global standard business Plan starting',
      headerClass: 'bg-blue',
      subheader:
        'This gives you insights into your competitors, consumers, market Trends, situational analysis, product valuation and business model.',
      price: 'N14,590',
      features: [
        'Operations',
        'Management Structures',
        'Financial model for management decision making',
      ],
    },

    {
      header: 'Data driven business plan and growth strategy',
      headerClass: 'bg-green',
      subheader:
        'This gives you the information in the standard business plan and also provide you with data that gives you a competitive advantage',
      price: 'N25,750',
      features: ['Expansion Plan', 'Growth Strategy'],
    },
    {
      header: 'Investor analytics pitch deck starting',
      headerClass: 'bg-yellow',
      subheader:
        'It is important to have a business plan before building an investor analytic pitch deck. This shows your business plan and the financial projection to drive the business into inclusive growth',
      price: 'N11,300',
    },
    {
      header: 'Product and Business Development starting',
      headerClass: 'bg-gray',
      subheader:
        'We assist in product development to help you gain more market acceptance and in building your business from an idea to a standard company',
      price: 'N31,800',
    },
    {
      header: 'Market research and market strategy starting',
      headerClass: 'bg-purple',
      subheader:
        'Here, you will discover more about your business sector, discover the key trends, the key drivers, and what controls the market as well as how customers are gained and what makes the business successful',
      price: 'N22,400',
    },
    {
      header: 'Marketing consulting per hr starting',
      headerClass: 'bg-indigo',
      subheader:
        'We will help you simplify the process of running your company, learn more about your industry, get answers to the roadblocks and the key challenges you are likely to face',
      price: 'N15,000',
    },
    {
      header: 'Financial Modelling with 5 years financial projection',
      headerClass: 'bg-coral',
      subheader:
        'After an indepth industry research and market entry strategy which are designed for the growth and expansion of the business.',
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
  ];

  constructor() {}

  ngOnInit(): void {}
}
