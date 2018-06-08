import { Geometry } from './geometry.model';
import { Property } from './property.model';

export class Place {
  type: string;
  properties: Property[];
  geometry: Geometry;
}
