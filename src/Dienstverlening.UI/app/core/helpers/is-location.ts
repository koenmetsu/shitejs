import { Location } from 'vue-router';

// type Dictionary<T> = { [key: string]: T };
// export interface Location {
//   name?: string;
//   path?: string;
//   hash?: string;
//   query?: Dictionary<string>;
//   params?: Dictionary<string>;
//   append?: boolean;
//   replace?: boolean;
// }
export function isLocation(x: String | Object): x is Location {
  if (x === undefined) {
    return false;
  }

  if ((<Location>x).name === undefined &&
      (<Location>x).path === undefined &&
      (<Location>x).hash === undefined &&
      (<Location>x).query === undefined &&
      (<Location>x).params === undefined &&
      (<Location>x).append === undefined &&
      (<Location>x).replace === undefined) {
    return false;
  }

  if ((<Location>x).name !== undefined && typeof (<Location>x).name !== 'string') {
    return false;
  }

  if ((<Location>x).path !== undefined && typeof (<Location>x).path !== 'string') {
    return false;
  }

  if ((<Location>x).hash !== undefined && typeof (<Location>x).hash !== 'string') {
    return false;
  }

  if ((<Location>x).query !== undefined && Object.prototype.toString.call((<Location>x).query) === '[object Array]') {
    return false;
  }

  if ((<Location>x).params !== undefined && Object.prototype.toString.call((<Location>x).params) === '[object Array]') {
    return false;
  }

  if ((<Location>x).append !== undefined && typeof (<Location>x).append !== 'boolean') {
    return false;
  }

  if ((<Location>x).replace !== undefined && typeof (<Location>x).replace !== 'boolean') {
    return false;
  }

  return true;
}
