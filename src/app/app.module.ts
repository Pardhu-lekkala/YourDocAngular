import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog'; 
import { InsuranceTablesComponent } from './insurance-tables/insurance-tables.component';
import { InsuranceDailogComponent } from './insurance-dailog/insurance-dailog.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { LaibilityComponent } from './laibility/laibility.component';
import { WorkersCompensationComponent } from './workers-compensation/workers-compensation.component';
import { AutoAccidentComponent } from './auto-accident/auto-accident.component';
import { OtherInfoComponent } from './other-info/other-info.component';
import { NjPipComponent } from './nj-pip/nj-pip.component';
import { CommercialComponent } from './commercial/commercial.component';
import { SelfPayComponent } from './self-pay/self-pay.component';


@NgModule({
  declarations: [
    AppComponent,
    InsuranceComponent,
    InsuranceTablesComponent,
    InsuranceDailogComponent,
    LaibilityComponent,
    WorkersCompensationComponent,
    AutoAccidentComponent,
    OtherInfoComponent,
    NjPipComponent,
    CommercialComponent,
    SelfPayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AvatarModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatAutocompleteModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
