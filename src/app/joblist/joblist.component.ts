import { JoblistService } from './../services/joblist.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { Job } from '../model/job.type';
import { JobpostComponent } from '../components/jobpost/jobpost.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-joblist',
  imports: [NgIf,JobpostComponent],
  templateUrl: './joblist.component.html',
  styleUrl: './joblist.component.css'
})
export class JoblistComponent implements OnInit {

  jobs: any;
  constructor(private jobService :JoblistService){}
  ngOnInit(): void {
   this.getJobsFromDB();
    //call function?
  }
  jobItems=signal<Array<Job>>([]);

  getJobsFromDB() {
    this.jobService.getJobsFromApi(
    ).subscribe((res) => {
      this.jobItems.set(res);
    })
  }
 
}