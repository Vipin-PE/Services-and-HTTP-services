import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-entry',
  templateUrl: './task-entry.component.html',
  styleUrls: ['./task-entry.component.scss']
})
export class TaskEntryComponent {
  newTask: Task = { title: '', description: '' };

  constructor(private taskService: TaskService) { }

  addTask(): void {
    this.taskService.addTask(this.newTask);
    this.newTask = { title: '', description: '' }; 
  }
}
