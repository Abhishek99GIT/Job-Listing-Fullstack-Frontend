import { Job } from './../model/job.type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JoblistService {
  baseURL: string="http://localhost:8080/";

  constructor(private http: HttpClient ){}
  public httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  getJobsFromApi(): Observable<Job[]>{
    let url: string = this.baseURL+"Allposts";
    return this.http.get<Job[]>(url,this.httpOptions);
  }

  postJobToApi(job:Job): Observable<any> {
    let url: string = this.baseURL+"post";
    // const body=JSON.stringify(job);
    return this.http.post(url, job,this.httpOptions).pipe(
      catchError((error) => {
        console.error("Error posting job:", error); // Log the full error object
        if (error.error) {
          console.error("Error details:", error.error);  // Log error details if available
        }
        return throwError(() => error); // Re-throw the error so the component can handle it
      })
    );
  }
}
