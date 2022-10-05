import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TASK } from '../mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
 task: Task[] = TASK;
 faTimes = faTimes
  constructor() { }

  ngOnInit(): void {
  }

}
