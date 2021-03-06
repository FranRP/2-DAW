import {animate, style, transition, trigger} from '@angular/core';

export function routerTransition() {
  return slideToLeft();
}

export function slideToRight() {
  return trigger('routerTransition', [
    transition(':enter', [
      style({
        position: 'fixed',
        width: '100%',
        height: '100%',
        'background-color': '#FEFEFE',
        transform: 'translateX(-100%)',
        'z-index': '99999'
      }),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ]),
  ]);
}

export function slideToLeft() {
  return trigger('routerTransition', [
    transition(':enter', [
      style({
        position: 'fixed',
        width: '100%',
        height: '100%',
        'background-color': '#FEFEFE',
        transform: 'translateX(100%)',
        'z-index': '99999'
      }),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
    ]),
  ]);
}

export function slideToBottom() {
  return trigger('routerTransition', [
    transition(':enter', [
      style({
        position: 'fixed',
        width: '100%',
        height: '100%',
        'background-color': '#FEFEFE',
        transform: 'translateY(-100%)',
        'z-index': '99999'
      }),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
    ]),
  ]);
}

export function slideToTop() {
  return trigger('routerTransition', [
    transition(':enter', [
      style({
        position: 'fixed',
        width: '100%',
        height: '100%',
        'background-color': '#FEFEFE',
        transform: 'translateY(100%)',
        'z-index': '99999'
      }),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(100%)'}))
    ]),
  ]);
}
