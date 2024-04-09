import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-listing',
  templateUrl: './task-listing.component.html',
  styleUrls: ['./task-listing.component.scss']
})
export class TaskListingComponent implements OnInit {
  tasks$: Observable<Task[]> | undefined;
  selectedTask: Task | null = null;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks$ = this.taskService.getTasks();
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task);
  }

  editTask(task: Task): void {
    this.selectedTask = task;
  }

  clearSelectedTask(): void {
    this.selectedTask = null;
  }
}
