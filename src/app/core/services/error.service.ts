import { EventEmitter,Injectable } from '@angular/core';
import {Error} from '../models/error.model'

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errorOccurred = new EventEmitter<Error>();

  handleError(error: any) {
      var text="uknown";
      if(error.error.errorMsg)text=error.error.errorMsg;
      else if(error.statusText)text=error.statusText;
      else if(error.error)text=error.error;
      const errorData = new Error(error.status,text);
      this.errorOccurred.emit(errorData);
  }
}
