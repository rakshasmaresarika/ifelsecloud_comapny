import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-four-cards',
  templateUrl: './top-four-cards.component.html',
  styleUrls: ['./top-four-cards.component.scss']
})
export class TopFourCardsComponent {
  topFourCards!: any[];
  topFourCardsValues!: any[];
  cardIcons = ["bi bi-wallet-fill", "bi bi-coin", "bi bi-piggy-bank", "bi bi-folder-minus"]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //api end point 
    const apiUrl = 'https://1.api.fy23ey01.careers.ifelsecloud.com/';
    
    //geting data from api
    this.http.get(apiUrl).subscribe(
      (data: any) => {
        console.log(data);
        const cardsArray = Object.keys(data); // Convert object values to an array
        const cardsArrayValue = Object.values(data);
        this.topFourCards = cardsArray.slice(0, 4);
        this.topFourCardsValues = cardsArrayValue.slice(0, 4);
        
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}

