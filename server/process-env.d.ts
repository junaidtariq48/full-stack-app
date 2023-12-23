export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: string;
      DB_URL: string | undefined;
      DB_NAME: string | undefined;
      API_URL: string | undefined;
    }
  }
}
