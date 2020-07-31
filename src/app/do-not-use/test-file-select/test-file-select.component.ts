import { Component, OnInit, forwardRef, Input, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR  } from '@angular/forms';

export const CUSTOM_INPUT_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => TestFileSelectComponent),
	multi: true
};

const noop = () => { };

@Component({
  selector: 'test-file-select',
  templateUrl: './test-file-select.component.html',
	styleUrls: ['./test-file-select.component.css'],
	providers: [CUSTOM_INPUT_VALUE_ACCESSOR]
})
export class TestFileSelectComponent implements OnInit, ControlValueAccessor {

	@Input() label: string;
	@Input() name: string;
	@Input() errorMessage: string;

	@Input() error: boolean;
	@Input() placeholder: string;
	@Input() hint: string;

	@Input() autoComplete: string;
	@Input() rowCount: string;
	@Input() required: boolean;
	@Input() hideLabel: boolean;
	@Input() icon: string = null;
	@Input() accept: string;
	@Input() disabled: boolean;
	@Input() multiple: boolean;
	@Input() selectMessage: string;
	@Input() dropMessage: string;
	@Input() disableDragDrop: boolean;
	@Input() displayState: string = 'default';
	@Input() displayStateMessage: string = null;

	//
	/** Callback registered via registerOnTouched (ControlValueAccessor) */
  protected _onTouchedCallback: () => void = noop;
  /** Callback registered via registerOnChange (ControlValueAccessor) */
  protected _onChangeCallback: (_: any) => void = noop;
	protected _value: FileList
	
	protected _isTouched:boolean = false;
  constructor(
		private cd: ChangeDetectorRef
	) {}
	
	ngOnInit() {
		// if(!this.errorMessage && this.inputError){
		// 	this.errorMessage = this.inputError;
		// }
		// if(!this.hint && this.inputHint){
		// 	this.hint = this.inputHint
		// }
		console.log(" >>> selectMessage = ", this.selectMessage)
	}
	// todo, accept changes to inputHint and inputError for legacy api
	
  get value(): FileList {
      return this._value;
  }
	
	/** value setter */
  @Input() set value(v: FileList) {
    if (v !== this._value) {
        this._value = v;
        /** _OnChangeCallback will register value change into the formControl */
        this._onChangeCallback(v);
        this.cd.markForCheck();
    }
  }
  writeValue(value: FileList): void {
    this.value = value;
  }
  registerOnChange(fn: (_: any) => void): void {
    this._onChangeCallback = fn;
  }
  registerOnTouched(fn: () => any): void {
    this._onTouchedCallback = fn;
  }
  onValueChange(event: any) {
    this.value = event.detail.files;
	}
	onBlur() {
		if(!this._isTouched){
			this._onTouchedCallback();
		}
	}
}
