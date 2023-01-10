import { Component, Input } from '@angular/core';
import { strongPasswordPattern, mediumPasswordPattern } from './passwordStrengthRegExp';


@Component({
  selector: 'app-strength-indicator',
  templateUrl: './strength-indicator.component.html',
  styleUrls: ['./strength-indicator.component.css']
})

export class StrengthIndicatorComponent  {
  @Input() formGroup: any;
  passwordStatus : string = "empty";

  indicatorsColor(): string[]{
    if (this.formGroup.value.password.length === 0) {
      this.passwordStatus = "empty";
      return ["silver", "silver", "silver"];
    }else if (this.formGroup.value.password.length < 8){
      this.passwordStatus = "short";
      return ["red", "red", "red"];
    }else if (strongPasswordPattern.test(this.formGroup.value.password)) {
      this.passwordStatus = "strong";
      return ["lime", "lime", "lime"];
    }else if(mediumPasswordPattern.test(this.formGroup.value.password)){
      this.passwordStatus = "medium";
      return ["yellow", "yellow", "silver"];
    }else{
      this.passwordStatus = "low";
      return ["red", "silver", "silver"];
    }
  }

}
