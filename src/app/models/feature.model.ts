import { Geometry } from './geometry.model';
import { Property } from './property.model';

export class Feature {
  type: string;
  properties: Property[];
  geometry: Geometry;
}
