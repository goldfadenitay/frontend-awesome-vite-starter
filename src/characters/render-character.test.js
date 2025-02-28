import { test, expect } from 'vitest';

import renderCharacter from './render-character';

const characters = import.meta.glob('./gandolf.json', { eager: true });

for (const [path, character] of Object.entries(characters)) {
  test(`rendered ${path}`, () => {
    const result = renderCharacter(character);
    expect(result).toMatchSnapshot();
  });
}
