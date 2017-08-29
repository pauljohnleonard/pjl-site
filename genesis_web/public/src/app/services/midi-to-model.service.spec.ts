import { TestBed, inject } from '@angular/core/testing';

import { MidiToModelService } from './midi-to-model.service';

describe('MidiToModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MidiToModelService]
    });
  });

  it('should be created', inject([MidiToModelService], (service: MidiToModelService) => {
    expect(service).toBeTruthy();
  }));
});
