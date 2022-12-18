import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentsServiceService } from '../service/components-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  Form!: FormGroup

  constructor(private api: ComponentsServiceService, private fb: FormBuilder, private router: Router) {
    this.Form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      age: ['', [Validators.required, Validators.max(60)]],
      country: ['', Validators.required],
    })

  }

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

  // post user
  postData() {
    this.api.postData(this.Form.value).subscribe(res => {
      alert("User Added Successfully ✔")
      this.router.navigateByUrl("table")
    })
  }
}
