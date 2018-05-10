import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { TeacherToClassComponent } from './teacher-to-class/teacher-to-class.component';
import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    TeacherToClassComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path:"sudheer",component:TeacherToClassComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
