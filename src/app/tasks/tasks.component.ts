import {Component,  OnInit} from '@angular/core';
import {Task} from '../task';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  selectedTask: Task;

  onSelect(taskIndex: number): void {
    this.selectedTask = this.tasks[taskIndex];
    this.selectedTask.taskId = taskIndex;
    console.log(this.selectedTask.taskName);
    console.log(taskIndex);
  }
  constructor(private taskService: TaskService) { }
  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  ngOnInit() {
    this.getTasks();
  }
}



