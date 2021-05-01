import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  image1: any = {
    url: '../../assets/img/image-from-rawpixel-id-2020085-png-2-3.png',
    show: false,
  };

  cwbpImg: any = {
    url: '../../assets/img/business-plan-2.png',
    show: false,
  };

  csltImg: any = {
    url: '../../assets/img/consultancy.jpg',
    show: false,
  };

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
  ];

  constructor() {}

  ngOnInit(): void {}
}
