import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { JoblistComponent } from './joblist/joblist.component';
import { HomeComponent } from './components/home/home.component';
import { HirejobsComponent } from './hirejobs/hirejobs.component';

export const routes: Routes = [

    {path:'',component: HomeComponent}  ,
    {path: 'allJobs', component: JoblistComponent},
    {path:'postJobs', component: HirejobsComponent}
  
];
