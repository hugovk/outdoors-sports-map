import {normalizeActionName} from '../common/helpers.js';

export const MAP_URL = 'http://tiles.hel.ninja/styles/hel-osm-light/{z}/{x}/{y}.png';
export const MAP_RETINA_URL = MAP_URL.replace('.png','@2x.png');

export const DEFAULT_ZOOM = 12;
export const MIN_ZOOM = 8;
export const MAX_ZOOM = 15;
export const BOUNDARIES = [[59.4, 23.8], [61.5, 25.8]];

export const mapActions = {
  SET_LOCATION: normalizeActionName('map/SET_LOCATION'),
  RECEIVE_ADDRESS: normalizeActionName('map/RECEIVE_ADDRESS'),
};