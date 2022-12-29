import { Component, Input, SimpleChanges } from '@angular/core';
import { LanguageFilter } from 'pipes/tableFilter.pipe';
import { filter } from 'rxjs';

@Component({
  selector: 'cmp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() columns: any;
  @Input() tableData: any = [];
  public data: any;
  public filtersActive: any;
  public filtersShow: any;
  public searchName: string;
  constructor() {}

  ngOnChanges(changes: any): void {
    if(!changes.tableData.firstChange){
      this.data = []
      this.data = [...changes.tableData.currentValue]
    }else{
      this.data = this.tableData?.length > 0 ? this.tableData : [];
    }
    //Se obtienen todos los posibles lenguajes para montar los filtros y por defecto se marcan todos.
    this.filtersShow = [...new Set(this.data.map((sub: any)=>sub.language).filter((el:any)=>el!=null))];
    this.filtersShow = [...this.filtersShow.map((el:any)=>({name: el, selected: true}))]
    this.refreshFilters();
  }

  public refreshFilters(): void{
    this.filtersActive = this.filtersShow.filter((filter: any) =>filter.selected).map((fil:any)=>fil.name);
  }

  public searchByName(): void{
    if(this.searchName){
      this.data = [...this.tableData.filter((el:any)=>(el.name.toLowerCase().includes(this.searchName.toLowerCase())))]
    }else{
      this.data = [...this.tableData]
    }
  }
}
