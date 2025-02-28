/// <reference types="vite/client" />

type Vitest = import('vitest');

interface ImportMetaEnv {
  readonly VITE_ENV: string;
  readonly VITE_IN_DEV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly vitest: Vitest;
}
