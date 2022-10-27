import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

interface ISmartphone {
  brand: string;
  description: string;
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

@Component({
  selector: 'app-example',
  templateUrl: './example.page.html',
  styleUrls: ['./example.page.scss'],
})
export class ExamplePage implements OnInit {
  smartphonesList: ISmartphone[] = [];
  smartphoneSelected!: ISmartphone;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getSmartPhones().subscribe((e) => {
      this.smartphonesList = e;
    });
  }

  getSmartPhones() {
    return this.httpClient
      .get(`https://dummyjson.com/products/category/smartphones`)
      .pipe(map((data: any) => data.products));
  }

  onBuyClicked(e) {
    console.log(e);

  }

}
