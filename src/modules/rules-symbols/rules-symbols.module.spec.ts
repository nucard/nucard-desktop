import { RulesSymbolsModule } from './rules-symbols.module';

describe('RulesSymbolsModule', () => {
  let rulesSymbolsModule: RulesSymbolsModule;

  beforeEach(() => {
    rulesSymbolsModule = new RulesSymbolsModule();
  });

  it('should create an instance', () => {
    expect(rulesSymbolsModule).toBeTruthy();
  });
});
