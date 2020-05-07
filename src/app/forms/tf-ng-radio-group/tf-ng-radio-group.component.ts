import { Component, forwardRef, Input, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR  } from '@angular/forms';

export const CUSTOM_INPUT_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => TfNgRadioGroupComponent),
	multi: true
};

const noop = () => { };

@Component({
  selector: 'tf-ng-radio-group',
  templateUrl: './tf-ng-radio-group.component.html',
  styleUrls: ['./tf-ng-radio-group.component.css'],
	providers: [CUSTOM_INPUT_VALUE_ACCESSOR]
})
export class TfNgRadioGroupComponent implements ControlValueAccessor {

	@Input() label: string;
	@Input() name: string;
	@Input() errorMessage: string;
	@Input() error: boolean;
	@Input() placeholder: string;
	@Input() description: string;
	@Input() hint: string;
	@Input() required: boolean;
	@Input() hideLabel: boolean;
	@Input() icon: string;
	@Input() iconPosition: string;
	//
	/** Callback registered via registerOnTouched (ControlValueAccessor) */
  protected _onTouchedCallback: () => void = noop;
  /** Callback registered via registerOnChange (ControlValueAccessor) */
  protected _onChangeCallback: (_: any) => void = noop;
	protected _value: any = '';
	
	protected _isTouched:boolean = false;
  constructor(
		private cd: ChangeDetectorRef
	) {}
	

  get value(): any {
    return this._value;
  }
	
	/** value setter */
  @Input() set value(v: any) {
    if (v !== this._value) {
        this._value = v;
        /** _OnChangeCallback will register value change into the formControl */
        this._onChangeCallback(v);
        this.cd.markForCheck();
    }
  }
  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: (_: any) => void): void {
    this._onChangeCallback = fn;
  }
  registerOnTouched(fn: () => any): void {
    this._onTouchedCallback = fn;
  }
  onValueChange(event: any) {
    this.value = event.detail.value;
	}
	onBlur() {
		if(!this._isTouched){
			this._onTouchedCallback();
		}
	}
}
