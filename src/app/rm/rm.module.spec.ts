import { RmModule } from './rm.module';

describe('RmModule', () => {
  let rmModule: RmModule;

  beforeEach(() => {
    rmModule = new RmModule();
  });

  it('should create an instance', () => {
    expect(rmModule).toBeTruthy();
  });
});
