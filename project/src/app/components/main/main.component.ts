import { Component } from '@angular/core';
import { UserModel } from 'models/user.model';
import { GithubService } from 'services/github.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public userSelected: string;
  public userData: UserModel;
  public tableColumns: any;
  public tableData: any = [];
  public loading: boolean;
  public loadingTable: boolean;

  constructor(private githubService: GithubService) {
    this.initTable();
  }

  public getUserData(): void {
    if (this.userSelected) {
      this.loading = true;
      this.githubService.getUserData(this.userSelected).subscribe({
        next: (userData: UserModel) => {
          this.loading = false;
          this.loadingTable = true;
          this.userData = userData;
          console.log(userData);
          if (userData) {
            this.githubService.getReposUserData(userData?.login).subscribe({
              next: (repos: any) => {
                //Al obtener los repos se mandan al componente encargado de la tabla.
                this.tableData = repos;
                this.loadingTable = false;
              },
            });
          }
        },
        error: (error) => {
          console.log(error.message);
          this.loading = false;
          this.loadingTable = false;
        },
      });
    } else {
      console.log('No hay usuario intruducido');
    }
  }

  private initTable(): void {
    // Se montan las columnas de la tabla.
    this.tableColumns = [
      { name: 'Nombre del repo', value: 'name' },
      { name: 'Descripcion', value: 'description' },
      { name: 'Enlace al repo', value: 'url' },
      { name: 'Estrellas', value: 'stargazers_count' },
      { name: 'Lenguajes de programacion', value: 'language' },
    ];
  }

  // private getUsers(): void{
  //   this.githubService.getData().subscribe({
  //     next:(users) =>{
  //       this.users = users;
  //     }, error: (error)=>{
  //       console.log(error);
  //     }
  //   })
  // }

}
