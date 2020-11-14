import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetJsonService {

  products: any = [];
  ngOnInit() {
    this.http.get(".data/days.json").subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }
  constructor(private http: HttpClient) { }
}
