import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentsServiceService } from '../service/components-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  constructor(private api: ComponentsServiceService, private active: ActivatedRoute) {
    this.id = this.active.snapshot.paramMap.get("id");
    this.api.viewUser(this.id).subscribe(res => {
      this.data = res
      console.log(this.data)
    })
  }
  id!: any
  data: any = {}

}
