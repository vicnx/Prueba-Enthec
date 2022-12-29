import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'cmp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() columns: any;
  @Input() tableData: any = [];
  public data: any;
  constructor() {
  }

  ngOnChanges(changes: any) {
    if(!changes.tableData.firstChange){
      this.data = []
      this.data = [...changes.tableData.currentValue]
    }else{
      this.data = this.tableData?.length > 0 ? this.tableData : [];
    }
  }
}
