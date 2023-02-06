import { Test, TestingModule } from '@nestjs/testing';
import { ScansService } from './scans.service';

describe('ScansService', () => {
  let service: ScansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScansService],
    }).compile();

    service = module.get<ScansService>(ScansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
