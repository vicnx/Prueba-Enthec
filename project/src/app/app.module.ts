import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "./shared/shared.module";
import { MainComponent } from './components/main/main.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        SharedModule
    ]
})
export class AppModule { }
