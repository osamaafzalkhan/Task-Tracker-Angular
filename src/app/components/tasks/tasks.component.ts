import { Component } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {

  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe //This line calls deleteTask method from TaskService to delete the task from server

    (() => (this.tasks = this.tasks.filter(t => t.id !== task.id))); // Then after deletion this line of code filters this task from the UI
  }

  toggleReminder(task: Task) {
    task.reminder =! task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }

}
