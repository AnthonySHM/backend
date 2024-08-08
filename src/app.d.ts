// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      db: sqlite3.Database;
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  interface Product {
    rowid: number;
    title: string;
    description: string;
  }
}

export {};
