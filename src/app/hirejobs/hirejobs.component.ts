import { Job } from './../model/job.type';
import { Component, NgModule, OnInit } from '@angular/core';
import { JoblistService } from '../services/joblist.service';

@Component({
  selector: 'app-hirejobs',
  imports: [],
  templateUrl: './hirejobs.component.html',
  styleUrl: './hirejobs.component.css'
})
export class HirejobsComponent implements OnInit{
  constructor( private jobService: JoblistService){}
  ngOnInit(): void {
    this.postJobsToDB();
  }
  
  job:Job={
    desc:"Seeking an experienced ML Engineer to develop AI models and deploy solutions.",
    exp:4,
    profile:"Machine Learning Engineer",
    techs:["Python","TensorFlow"," PyTorch"," Scikit-Learn"," AWS"]
  };
  
  postJobsToDB(){
    this.jobService.postJobToApi(this.job).subscribe({
      next: (res) => {
        console.log("Job posted successfully!!!", res); // Log the response
      },
      error: (err) => {  // Handle the error here!
        console.error("Error from component:", err);
        // Display an error message to the user, etc.
      }
    });
  }
}
