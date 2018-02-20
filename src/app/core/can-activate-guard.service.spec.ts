import { TestBed, inject } from '@angular/core/testing';
import { CanActivateGuard } from './can-activate-guard.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TreeNode } from '@angular/router/src/utils/tree';

describe('CanActivateGuard', () => {
  const activeSnap = new ActivatedRouteSnapshot();
  const state = new RouterStateSnapshot(<TreeNode<ActivatedRouteSnapshot>>{ value: activeSnap });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateGuard, ActivatedRouteSnapshot,
        RouterStateSnapshot, AuthService, HttpClient, HttpHandler, Router]
    });
  });

  it('should be created', inject([CanActivateGuard], (service: CanActivateGuard) => {
    expect(service).toBeTruthy();
  }));

  it('should return something', inject([CanActivateGuard],
    (service: CanActivateGuard) => {
    const ret = service.canActivate(activeSnap, state);
    expect(ret).toBeFalsy();
  }));
});
