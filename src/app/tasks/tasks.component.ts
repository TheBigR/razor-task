import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {TASKS} from '../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  task: Task = {
    taskName: 'fuck off',
    taskType: 'just starting',
    associatedFile: 'none',
    description: 'just making sure it all works.'

  };
  tasks =  TASKS;

  constructor() { }

  ngOnInit() {
  }

}
