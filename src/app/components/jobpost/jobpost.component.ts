import { Component, inject, Input, input, OnInit, Signal, signal } from '@angular/core';
import { Job } from '../../model/job.type';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-jobpost',
  imports: [NgFor],
  templateUrl: './jobpost.component.html',
  styleUrl: './jobpost.component.css'
})
export class JobpostComponent {
 
  job=input.required<Array<Job>>()
}
