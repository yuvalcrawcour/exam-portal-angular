import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  extractUserName(token: string): string {
    let decodedToken = this.jwt.decodeToken(token);
    return decodedToken.sub;
  }
  private jwt:JwtHelperService = new JwtHelperService();

  extractUserType(token: string): string {
    let decodedToken = this.jwt.decodeToken(token);
    return decodedToken.userType;
    
  }
  extractUserId(token: string): number {
    let decodedToken = this.jwt.decodeToken(token);
    
    return decodedToken.userId;
    
  }

  constructor() { }
}
