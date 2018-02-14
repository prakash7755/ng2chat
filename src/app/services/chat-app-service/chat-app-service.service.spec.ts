import { TestBed, inject } from '@angular/core/testing';

import { ChatAppServiceService } from './chat-app-service.service';

describe('ChatAppServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatAppServiceService]
    });
  });

  it('should be created', inject([ChatAppServiceService], (service: ChatAppServiceService) => {
    expect(service).toBeTruthy();
  }));
});
