import { NgModule } from '@angular/core';
import { AppComponent } from './components/appComponent/app.component';
import { SidePanelComponent } from './components/sidePanelComponent/sidePanel.component';
import { MainPanelComponent } from './components/mainPanelComponent/mainPanel.component';
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
    declarations: [AppComponent, SidePanelComponent, MainPanelComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}