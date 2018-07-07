import { KeyboardEventsModule } from './keyboard-events.module';

describe('KeyboardEventsModule', () => {
  let keyboardEventsModule: KeyboardEventsModule;

  beforeEach(() => {
    keyboardEventsModule = new KeyboardEventsModule();
  });

  it('should create an instance', () => {
    expect(keyboardEventsModule).toBeTruthy();
  });
});
