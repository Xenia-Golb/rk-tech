interface ImportMetaEnv {
  readonly VITE_CAT_API_KEY: string;
  readonly VITE_CAT_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
