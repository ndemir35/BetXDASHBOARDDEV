import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './base-api-service';
import { environment } from '~/environments/environment';

export class BaseIdentityService extends BaseApiService {
  override baseUrl: string = environment.identityServiceUrl;
  constructor(_http: HttpClient) {
    super(_http);
  }
}
