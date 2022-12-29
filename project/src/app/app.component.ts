import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: String[] = [];

  title = 'Prueba técnica Front-End Mid';

  constructor(private githubService: GithubService){
    this.getUsers();
  }

  private getUsers(): void{
    this.githubService.getData().subscribe({
      next:(users) =>{
        console.log(users);
      }
    })
  }
}
