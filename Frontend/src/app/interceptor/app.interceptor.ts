import { Injectable } from '@angular/core';
import { AuthService } from '@app/services';
import { DataService } from '@shared/services';
import { EMPTY, Subscription } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SpinnerOverlayService } from '../shared/services/spinner-overlay.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  token: string;
  constructor(private router: Router, 
    private spinnerOverlayService: SpinnerOverlayService,
    private auth: AuthService, private data: DataService) { }
  /*  intercept(request: HttpRequest<unknown>,
     next: HttpHandler): Observable<HttpEvent<unknown>> {
       if(request.method == "POST" && request.url.includes('medias')){
         this.auth.setHeader('multipart/form-data')
       }else {
         this.auth.setHeader();
       } */
  intercept(request: HttpRequest<unknown>,
    next: HttpHandler): Observable<HttpEvent<unknown>> {
      const spinnerSubscription: Subscription = this.spinnerOverlayService.spinner$.subscribe();  
      let allowMultiPart = ['medias', 'admin-service/api/v1/category']
      if((request.method == "POST" || request.method == "PUT" || request.method == 'DELETE') && allowMultiPart.some(v => request.url.includes(v))){
        this.auth.setHeader('multipart/form-data')
      }else {
        this.auth.setHeader();
      }
      // if (request.method == "POST" && request.url.includes('medias')) {
    //   this.auth.setHeader('multipart/form-data')
    // } else {
    //   this.auth.setHeader();
    // }
    // this.auth.setHeader();

    request = request.clone({ headers: this.auth.headers });

    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            console.log('responce', event);
            console.log('response body', event.body);
            if (event.body) {
              if (event.body.token) {
                this.auth.setToken(event.body.token);
                this.data.setUserDetail(event.body);
              }
              spinnerSubscription.unsubscribe();
            }
            spinnerSubscription.unsubscribe();
          }
          
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            if (error?.status === 401) {
              const url = window.location.pathname;
              if (url !== '/auth/login') {
                this.data.setRedirectUrl(url);
              }
              this.router.navigateByUrl('/auth/login');
            }
            spinnerSubscription.unsubscribe();
            return EMPTY;
            return throwError(error);
          }
          spinnerSubscription.unsubscribe();
        }
      )
    );





  }
}
