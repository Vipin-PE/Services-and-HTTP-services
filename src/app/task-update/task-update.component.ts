import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.scss']
})
export class TaskUpdateComponent {
  @Input() task: Task | undefined;

  constructor(private taskService: TaskService) { }

  updateTask(): void {
    if (this.task) {
      this.taskService.updateTask(this.task);
    }
  }
}
