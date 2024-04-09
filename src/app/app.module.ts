// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskListingComponent } from './task-listing/task-listing.component';
import { TaskEntryComponent } from './task-entry/task-entry.component';
import { TaskService } from './task.service';
import { TaskUpdateComponent } from './task-update/task-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListingComponent,
    TaskEntryComponent,
    TaskUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
