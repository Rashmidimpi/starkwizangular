import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { SigninComponent } from './signin/signin.component'
import { TransactionsTableComponent } from './transactions-table/transactions-table.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { ReviewQuizComponent } from './review-quiz/review-quiz.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'dashboard', component: DashComponent },
  { path: 'evaluation', component: CreateTestComponent },
  { path: 'orders', component: OrdersTableComponent },
  { path: 'transactions', component: TransactionsTableComponent },
  { path: 'students', component: UserListComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
