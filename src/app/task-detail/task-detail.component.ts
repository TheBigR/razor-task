import {Component, OnInit, Input} from '@angular/core';
import {Task} from '../task';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '../services/task.service';
import {NorthwindService} from '../services/northwind.service';
import {NorthWindData} from '../northWindData';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})


export class TaskDetailComponent implements OnInit {

  @Input() task: Task;
  constructor(private route: ActivatedRoute,
              private taskService: TaskService,
              private location: Location,
              private northWindService: NorthwindService) { }
  windData: NorthWindData[];
  ngOnInit() {
    this.getTask();
    this.getNwData();
  }
  getTask(): void {
    const id =  +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id).subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }

  getSecondAnswer(): void {
    console.log('this is the second answer func calling');
    console.log(this.windData);
  }

  getNwData(): void {
    this.northWindService.getData().subscribe( windData => this.windData = windData);
  }

}
