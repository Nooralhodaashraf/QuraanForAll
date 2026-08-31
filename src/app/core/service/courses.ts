import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CoursesId, CoursesInt } from '../model/courses';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Courses {
  private readonly httpClient = inject(HttpClient);

  getAllCourses(): Observable<CoursesInt[]> {
    return this.httpClient.get<CoursesInt[]>(`${environment.base_URL}?per_page=100`);
  }

  getCoursesByCategory(categoryId: number): Observable<CoursesInt[]> {
    return this.httpClient.get<CoursesInt[]>(`${environment.base_URL}?course-category=${categoryId}&per_page=100`);
  }

  getApiId(): Observable<CoursesId[]> {
    return this.httpClient.get<CoursesId[]>(environment.base_URL + '?_fields=id');
  }

  getApidata(id: string | number): Observable<CoursesInt> {
    return this.httpClient.get<CoursesInt>(environment.base_URL + `/${id}`);
  }
}

