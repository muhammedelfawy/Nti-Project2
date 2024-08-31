import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private Home = 'http://localhost:8000/api/v1/';
  private Projects = 'http://localhost:8000/api/v1/projects';
  private Services = 'http://localhost:8000/api/v1/services';
  private Contacts = 'http://localhost:8000/api/v1/contacts';

  constructor(private _HttpClient: HttpClient) { }


  getHome(): Observable<any> {
    return this._HttpClient.get<any>(this.Home);
  }


  addProject(formData: FormData): Observable<any> {
    return this._HttpClient.post<any>(`${this.Projects}/admin`, formData);
  }
  deleteProject(projectId: string): Observable<any> {
    return this._HttpClient.delete<any>(`${this.Projects}/${projectId}/admin`);
  }
  updateProject(projectId: string, formData: FormData): Observable<any> {
    const url = `${this.Projects}/${projectId}/admin`;
    return this._HttpClient.put(`${this.Projects}/${projectId}/admin`, formData);
  }



  addservice(formData: FormData): Observable<any> {
    return this._HttpClient.post(`${this.Services}/admin`, formData);
  }
  deleteService(serviceId: string): Observable<any> {
    return this._HttpClient.delete(`${this.Services}/${serviceId}/admin`);
  }
  updateService(serviceId: string, formData: FormData): Observable<any> {
    return this._HttpClient.put(`${this.Services}/${serviceId}/admin`, formData);
  }

  sendContact(formData: FormData): Observable<any> {
    return this._HttpClient.post<any>(this.Contacts, formData);
  }
  deleteContact(contactId: string): Observable<any> {
    return this._HttpClient.delete<any>(`${this.Contacts}/${contactId}/admin`);
  }

  loginAdmin(data: any): Observable<any> {
    return this._HttpClient.post<any>("http://localhost:8000/secret-path-API", data);
  }

}
