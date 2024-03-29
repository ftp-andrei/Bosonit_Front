import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, GraficoComponent],
  imports: [BrowserModule, NgChartsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
