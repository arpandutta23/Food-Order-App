import { Component, OnInit } from '@angular/core';
import { FoodOrderService } from '../services/food-order.service';

@Component({
  selector: 'app-food-order-details',
  templateUrl: './food-order-details.component.html',
  styleUrls: ['./food-order-details.component.css']
})
export class FoodOrderDetailsComponent implements OnInit {
  reports: any[] = [];
  totalFine: number = 0;
  selectedTab: number = 1;

  constructor(private foodOrderService: FoodOrderService) { }

  ngOnInit(): void {
    this.fetchReport();
  }

  fetchReport() {
    const month = 11;
    this.foodOrderService.getMonthlyReport(month).subscribe(data => {
      this.reports = data.reports;
      this.calculateFine();
    },
    error => {
      console.error('Error fetching food order details:', error);
    });
  }

  calculateFine() {
    this.totalFine = this.reports.reduce((fine, report) => {
      const dailyFine = Object.values(report.opt_ins).filter(status => status === 'Pending').length * 100;
      return fine + dailyFine;
    }, 0);
  }

  selectTab(tabNumber: number): void {
    this.selectedTab = tabNumber;
  }
}
