import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../Customer';
import { ComponentsServiceService } from '../service/components-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor(private api: ComponentsServiceService) {
    this.getAllData()
  }

  ngOnInit(): void {

  }

  data: Customer[] = []
  noData: boolean = false
  lengthOfUsers: number = 0
  searchText = ""

  // get all data
  getAllData() {
    this.api.getData().subscribe((res: any) => {
      this.data = res
    })
  }

  // delete user
  deleteOneUser(id: any) {
    if (confirm()) {
      this.api.deleteUser(id).subscribe(res => {
        location.reload()
      })
    }
  }

}
