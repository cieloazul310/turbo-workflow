import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  clean: true,
  outDir: 'lib',
  format: ['cjs', 'esm'],
  dts: true,
});
