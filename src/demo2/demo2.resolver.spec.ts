import { Test, TestingModule } from '@nestjs/testing';
import { Demo2Resolver } from './demo2.resolver';
import { Demo2Service } from './demo2.service';

describe('Demo2Resolver', () => {
  let resolver: Demo2Resolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Demo2Resolver, Demo2Service],
    }).compile();

    resolver = module.get<Demo2Resolver>(Demo2Resolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
