import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { OrdersTableDataSource, OrdersTableItem } from './orders-table-datasource';
import { OrdersService} from 'src/app/shared/orders.service';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<OrdersTableItem>;
  dataSource: OrdersTableDataSource;

  

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'category','seller','listed_on','no_of_people_interested','action'];

  constructor(private OrdersService : OrdersService) { }

  ngOnInit() {
    this.dataSource = new OrdersTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  updateStatus(id, data) {
    console.log(data);
    this.OrdersService.updateStatus(id,data).subscribe((res) => {
      alert("Status updated");
      // this.getOrdersList();
    })

  }
}
