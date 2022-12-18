import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ComponentsServiceService } from '../service/components-service.service';

@Component({
  selector: 'app-upgrade-user',
  templateUrl: './upgrade-user.component.html',
  styleUrls: ['./upgrade-user.component.scss']
})
export class UpgradeUserComponent {
  constructor(private fb:FormBuilder, private api: ComponentsServiceService, private route: Router, private active: ActivatedRoute) {
    this.id = active.snapshot.paramMap.get("id")

    this.api.getUserById(this.id).subscribe(res => {
      this.data = res
    })

    this.Form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      age: ['', [Validators.required, Validators.max(60)]],
      country: ['', Validators.required],
    })
  }

  Form!:FormGroup
  id!: any
  data: any = {}

  get username() {
    return this.Form.get("username")
  }
  get email() {
    return this.Form.get("email")
  }
  get password() {
    return this.Form.get("password")
  }
  get age() {
    return this.Form.get("age")
  }
  get country() {
    return this.Form.get("country")
  }

  // update user
  edit(){
    this.api.updateUser(this.Form.value, this.id).subscribe(res=>{
      this.route.navigateByUrl("table")
    })
  }
}
