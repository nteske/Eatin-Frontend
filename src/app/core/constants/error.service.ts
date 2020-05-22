import { EventEmitter,Injectable } from '@angular/core';
import {Error} from '../models/error.model'

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errorOccurred = new EventEmitter<Error>();

  handleError(error: any) {
      const errorData = new Error(error.status,error._body);
      this.errorOccurred.emit(errorData);
  }
}
