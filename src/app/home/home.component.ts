import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  image1: any = {
    url: '../../assets/img/image-from-rawpixel-id-2020085-png-2.png',
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
    { header: 'Global standard business Plan starting', price: 'N14,590' },
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
