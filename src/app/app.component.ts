import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
    public formGroup = new FormGroup({
    userName: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ])
  })

  get userName():any { return this.formGroup.get('userName'); }
  get password():any { return this.formGroup.get('password'); }

  get passwordValue():any { return this.formGroup.get('password')?.value; }
}
