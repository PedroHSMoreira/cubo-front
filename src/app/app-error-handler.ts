import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { NotificationService } from './shared/snackbar/services/notification.service';

@Injectable({ providedIn: 'root' })
export class ApplicationErrorHandler extends ErrorHandler {

    constructor(private ns: NotificationService, private zone: NgZone) {
        super()
    }

    handleError(errorReponse: HttpErrorResponse | any) {
        if (errorReponse instanceof HttpErrorResponse) {
            const message = errorReponse.error.message
            this.zone.run(() => {
                switch (errorReponse.status) {
                    case 0:
                        this.ns.notify(message || 'Server is not connected', 'danger')
                        break;
                    case 400:
                        this.ns.notify(message || 'Bad request', 'danger')
                        break;
                    case 401:
                        this.ns.notify(message || 'Unauthorized', 'danger')
                        break;
                    case 403:
                        this.ns.notify(message || 'Unauthorized.', 'danger')
                        break;
                    case 404:
                        this.ns.notify(message || 'Resource not found.', 'danger')
                        break;
                    case 500:
                        this.ns.notify(message || 'Internal error.', 'danger')
                        break;
                }
            })
        }
        super.handleError(errorReponse)
    }
}