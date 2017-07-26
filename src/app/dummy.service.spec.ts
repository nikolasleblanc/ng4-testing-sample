import { DummyService } from './dummy.service';

describe('DummyService', () => {
  let service: DummyService;
 
  beforeEach(() => { 
    service = new DummyService(); 
  });
 
  it('#getValue should return real value', () => {
    expect(service.getName()).toBe('Nik');
  });
});

