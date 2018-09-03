import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
declare var setCookie,delCookie,getCookie : any;


@Injectable()
export class NoopInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        const token = getCookie("api_token");
        var authReq = req;
        authReq = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + token)
        });
        return next.handle(authReq);
    }
}
