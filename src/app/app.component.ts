import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jsonAPI';
  http = inject(HttpClient);
  personas: any[] = [];

  private apiUrl = 'http://localhost:3000'; 

  constructor(){
    this.getPersonas().subscribe((data: any[]) =>{
      console.log(data);
      this.personas = data;
    });
  }

  getPersonas(): any{
    return this.http.get(`${this.apiUrl}/persona`)
  }
}
