import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',

})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  // @Output()
  // public onValue: EventEmitter<string> = new EventEmitter();

  @Input()
  public initialValue: string = '';

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime( 300 ),
    )
    .subscribe( ( value ) => {
      this.onDebounce.emit( value );
    });
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  // emitValue( value: string ): void  {
  //   this.onValue.emit( value );
  // }

  onKeyPress( searchTerm: any ): void {
    this.debouncer.next( searchTerm );
  }

}
