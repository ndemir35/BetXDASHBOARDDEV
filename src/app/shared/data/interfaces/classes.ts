export class StorageItem<T> {
  private _key: string = '';

  constructor(key: string) {
    this._key = key;
  }

  get value(): T {
    return localStorage.getItem(this._key) as T;
  }

  set value(value: T) {
    localStorage.setItem(this._key, value as string);
  }

  remove(): void {
    localStorage.removeItem(this._key);
  }
}
