import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { TopFourCardsComponent } from './top-four-cards/top-four-cards.component';
import { TransactionGridComponent } from './transaction-grid/transaction-grid.component';
import { FinanceLineGraphComponent } from './finance-line-graph/finance-line-graph.component';
import { AllExpensesDonutComponent } from './all-expenses-donut/all-expenses-donut.component';



@NgModule({
  declarations: [
    AppComponent,
    TopFourCardsComponent,
    TransactionGridComponent,
    FinanceLineGraphComponent,
    AllExpensesDonutComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     NgApexchartsModule,
     HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
