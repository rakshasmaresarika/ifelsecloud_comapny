import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction-grid',
  templateUrl: './transaction-grid.component.html',
  styleUrls: ['./transaction-grid.component.scss']
})
export class TransactionGridComponent {
  transactions!: any[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const apiUrl = 'https://2.api.fy23ey01.careers.ifelsecloud.com/';

    this.http.get<any[]>(apiUrl).subscribe(
      (data: any[]) => {
        this.transactions = data;
        console.log(data)
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}

