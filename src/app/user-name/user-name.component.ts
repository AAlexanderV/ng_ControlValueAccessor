import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Self } from '@angular/core';
import { ControlValueAccessor, NgControl} from '@angular/forms';


@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserNameComponent implements ControlValueAccessor {
  public value: string | undefined;

  private onChange!:(value:string)=>void;
  private onTouched!:()=>void;

  constructor(
    @Self() private readonly ngControl:NgControl, 
    private readonly changeDetector : ChangeDetectorRef
  ){
    this.ngControl.valueAccessor = this;
  }

  public onInputValueChange(event : Event) :  void {
    const targetElement = event.target as HTMLInputElement;
    const content = targetElement.value;

    this.onChange(content);
  }

  writeValue(value: string): void {
    this.value = value;

    this.changeDetector.detectChanges();
  }

  registerOnChange(fn: (value: string)=>void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: ()=>void): void {
    this.onTouched = fn;
  }
}



/////
// @Component({
//   selector: 'app-user-name',
//   templateUrl: './user-name.component.html',
//   styleUrls: ['./user-name.component.css'],
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   providers: [{
//     provide: NG_VALUE_ACCESSOR,
//     useExisting: forwardRef(()=>UserNameComponent),
//     multi: true
//   }]
// })

// export class UserNameComponent implements ControlValueAccessor {
//   public value: string | undefined;

//   private onChange!:(value:string)=>void;
//   private onTouched!:()=>void;

//   constructor(private readonly changeDetector : ChangeDetectorRef){}

//   public onInputValueChange(event : Event) :  void {
//     const targetElement = event.target as HTMLInputElement;
//     const content = targetElement.value;

//     this.onChange(content);
//   }

//   writeValue(value: string): void {
//     this.value = value;

//     this.changeDetector.detectChanges();
//   }

//   registerOnChange(fn: (value: string)=>void): void {
//     this.onChange = fn;
//   }

//   registerOnTouched(fn: ()=>void): void {
//   this.onTouched = fn;

//   }

// }