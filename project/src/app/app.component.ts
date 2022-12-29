import { Component } from '@angular/core';
import { UserModel } from 'models/user.model';
import { GithubService } from 'services/github.service';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public userData: UserModel;
  public tableColumns: any;
  public tableData: any = [];
  public loading: boolean;
  public loadingTable: boolean;
  public showAlert: boolean = false;
  public errorMsg: string;

  constructor(private githubService: GithubService) {
    this.initTable();
  }

  public getUserData(userSelected: string): void {
    if (userSelected) {
      this.loading = true;
      this.githubService.getUserData(userSelected).subscribe({
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
          this.showAlerts(error.message)
          this.loading = false;
          this.loadingTable = false;
        },
      });
    } else {
      this.showAlerts('No has introducido ningún usuario')
    }
  }

  public showAlerts(msg:string): void{
    this.showAlert = true;
    this.errorMsg = msg;
    setTimeout(() => {
      this.showAlert = false;
      this.errorMsg = '';
    }, 2500);
  }

  private initTable(): void {
    // Se montan las columnas de la tabla.
    this.tableColumns = [
      { name: 'Nombre del repo', value: 'name', columnWidth: '15%'},
      { name: 'Descripcion', value: 'description', columnWidth: '30%'},
      { name: 'Enlace al repo', value: 'url', columnWidth: '30%'},
      { name: 'Estrellas', value: 'stargazers_count', columnWidth: '10%'},
      { name: 'Lenguajes de programacion', value: 'language', columnWidth: '15%'},
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
