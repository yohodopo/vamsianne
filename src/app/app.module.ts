import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterConfig} from './app.router';

import {CoreModule} from './core/core.module';
import {ArticlesModule} from './articles/articles.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, CoreModule, ArticlesModule, RouterConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
