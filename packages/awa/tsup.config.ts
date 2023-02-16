import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  clean: true,
  outDir: 'lib',
  dts: true,
});
