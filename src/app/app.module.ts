import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RealtyComponent } from './components/realty/realty.component';
import { BillComponent } from './components/bill/bill.component';
import { ReportComponent } from './components/report/report.component';
import { RealtiesComponent } from './components/realties/realties.component';
import { UsersComponent } from './components/users/users.component';
import { BillsComponent } from './components/bills/bills.component';
import { ReportsComponent } from './components/reports/reports.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import {MatTableModule} from '@angular/material/table';
import * as echarts from 'echarts';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableDataComponent } from './components/table-data/table-data.component';
import { LoginComponent } from './auth/containers/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RealtyComponent,
    BillComponent,
    LoginComponent,
    HomeComponent,
    ReportComponent,
    RealtiesComponent,
    UsersComponent,
    BillsComponent,
    TableDataComponent,
    ReportsComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    NgxEchartsModule.forRoot({
      echarts
    }),
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
