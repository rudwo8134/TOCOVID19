import { Algoma } from "./Polygon/Algoma";
import { Brant } from "./Polygon/Brant";
import { Chathamkent } from "./Polygon/chathamKent";
import { Durham } from "./Polygon/durhamregion";
import { Greybruce } from "./Polygon/Greybruce";
import { Guelph } from "./Polygon/Guelph";
import { Haldimand } from "./Polygon/Haldimand";
import { Haliburton } from "./Polygon/Haliburton";
import { Hamilton } from "./Polygon/Hamilton";
import { Holton } from "./Polygon/Holton";
import { Huron } from "./Polygon/Huron";
import { Kingston } from "./Polygon/Kingston";
import { Lambton } from "./Polygon/lambton";
import { Leeds } from "./Polygon/Leeds";
import { London } from "./Polygon/London";
import { Niagara } from "./Polygon/Niagara";
import { Northbay } from "./Polygon/Northbay";
import { Northern } from "./Polygon/Northern";
import { NorthWestern } from "./Polygon/NorthWestern";
import { Ottawa } from "./Polygon/Ottawa";
import { Peel } from "./Polygon/peelregion";
import { Peterborough } from "./Polygon/Peterborugh";
import { Porcupine } from "./Polygon/Porcupine";
import { PrinceEdward } from "./Polygon/princeedward";
import { Renfrew } from "./Polygon/Renfrew";
import { Simcoe } from "./Polygon/Simcoe";
import { Southwestern } from "./Polygon/Southwestern";
import { Sudbury } from "./Polygon/Sudbury";
import { Thunderbay } from "./Polygon/Thunderbay";
import { Timiskaming } from "./Polygon/Timiskaming";
import { toronto } from "./Polygon/toroto";
import { Waterloo } from "./Polygon/Waterloo";
import { Windsor } from "./Polygon/Windsor";
import { York } from "./Polygon/York";

export const regionData = [
  {
    id: 1,
    Region: 'Algoma',
    code: 3526,
    coordinate: { lat: 46.532211, lng: -84.3172187 },
    Polygon: Algoma,
  },
  {
    id: 2,
    Region: 'Brant',
    code: 3527,
    coordinate: { lat: 43.151859, lng: -80.2766627 },
    Polygon: Brant,
  },
  {
    id: 3,
    Region: 'Chatham-Kent',
    code: 3540,
    coordinate: { lat: 42.4038131, lng: -82.2107812 },
    Polygon: Chathamkent,
  },
  {
    id: 4,
    Region: 'Durham',
    code: 3530,
    coordinate: { lat: 43.8848583, lng: -78.9124946 },
    Polygon: Durham,
  },
  {
    id: 5,
    Region: 'North Eastern',
    code: 3558,
    coordinate: { lat: 47.3989546, lng: -81.9646191 },
    Polygon: Northern,
  },
  {
    id: 6,
    Region: 'Grey Bruce',
    code: 3533,
    coordinate: { lat: 44.4594867, lng: -81.2451061 },
    Polygon: Greybruce,
  },
  {
    id: 7,
    Region: 'Haldimand-Norfolk',
    code: 3534,
    coordinate: { lat: 42.7306055, lng: -80.5868254 },
    Polygon: Haldimand,
  },
  {
    id: 8,
    Region: 'Haliburton Kawartha Pineridge',
    code: 3535,
    coordinate: { lat: 44.9040597, lng: -78.7019828 },
    Polygon: Haliburton,
  },
  {
    id: 9,
    Region: 'Halton',
    code: 3536,
    coordinate: { lat: 43.5103274, lng: -80.0092508 },
    Polygon: Holton,
  },
  {
    id: 10,
    Region: 'Hamilton',
    code: 3537,
    coordinate: { lat: 43.2609686, lng: -80.1133275 },
    Polygon: Hamilton,
  },
  {
    id: 11,
    Region: 'Hastings Prince Edward',
    code: 3538,
    coordinate: { lat: 44.0091151, lng: -77.6703606 },
    Polygon: PrinceEdward,
  },
  {
    id: 12,
    Region: 'Huron Perth',
    code: 3539,
    coordinate: { lat: 43.4611503, lng: -81.3251833 },
    Polygon: Huron,
  },
  {
    id: 13,
    Region: 'Kingston Frontenac Lennox & Addington',
    code: 3541,
    coordinate: { lat: 44.6460445, lng: -77.0019707 },
    Polygon: Kingston,
  },
  {
    id: 14,
    Region: 'Lambton',
    code: 3542,
    coordinate: { lat: 43.0015634, lng: -82.2942654 },
    Polygon: Lambton,
  },
  {
    id: 15,
    Region: 'Leeds Grenville and Lanark',
    code: 3543,
    coordinate: { lat: 44.7331911, lng: -76.0094092 },
    Polygon: Leeds,
  },
  {
    id: 16,
    Region: 'Middlesex-London',
    code: 3544,
    coordinate: { lat: 42.9725595, lng: -81.2804561 },
    Polygon: London,
  },
  {
    id: 17,
    Region: 'Niagara',
    code: 3546,
    coordinate: { lat: 43.0715158, lng: -79.3368854 },
    Polygon: Niagara,
  },
  {
    id: 18,
    Region: 'North Bay Parry Sound',
    code: 3547,
    coordinate: { lat: 45.3599835, lng: -80.0481362 },
    Polygon: Northbay,
  },
  {
    id: 19,
    Region: 'Northwestern',
    code: 3549,
    coordinate: { lat: 50.4934978, lng: -90.9638383 },
    Polygon: NorthWestern,
  },
  {
    id: 20,
    Region: 'Ottawa',
    code: 3551,
    coordinate: { lat: 45.2502975, lng: -76.0804344 },
    Polygon: Ottawa,
  },
  {
    id: 21,
    Region: 'Peel',
    code: 3553,
    coordinate: { lat: 43.68187157401338, lng: -79.8157090677861 },
    Polygon: Peel,
  },
  {
    id: 22,
    Region: 'Peterborough',
    code: 3555,
    coordinate: { lat: 44.3152959, lng: -78.3956135 },
    Polygon: Peterborough,
  },
  {
    id: 23,
    Region: 'Porcupine',
    code: 3556,
    coordinate: { lat: 48.4937888, lng: -81.2011818 },
    Polygon: Porcupine,
  },
  {
    id: 24,
    Region: 'Renfrew',
    code: 3557,
    coordinate: { lat: 45.47491, lng: -76.69125598 },
    Polygon: Renfrew,
  },
  {
    id: 25,
    Region: 'Simcoe Muskoka',
    code: 3560,
    coordinate: { lat: 44.7149664, lng: -79.6649377 },
    Polygon: Simcoe,
  },
  {
    id: 26,
    Region: 'Southwestern',
    code: 3575,
    coordinate: { lat: 42.0719666, lng: -82.7104213 },
    Polygon: Southwestern,
  },
  {
    id: 27,
    Region: 'Sudbury',
    code: 3561,
    coordinate: { lat: 46.584537, lng: -81.3593029 },
    Polygon: Sudbury,
  },
  {
    id: 28,
    Region: 'Thunder Bay',
    code: 3562,
    coordinate: { lat: 48.4027014, lng: -89.380607 },
    Polygon: Thunderbay,
  },
  {
    id: 29,
    Region: 'Timiskaming',
    code: 3563,
    coordinate: { lat: 47.6685595, lng: -81.194061 },
    Polygon: Timiskaming,
  },
  {
    id: 30,
    Region: 'Toronto',
    code: 3595,
    coordinate: { lat: 43.7184038, lng: -79.5181405 },
    Polygon: toronto,
  },
  {
    id: 31,
    Region: 'Waterloo	',
    code: 3565,
    coordinate: { lat: 43.4823217, lng: -80.61675895 },
    Polygon: Waterloo,
  },
  {
    id: 32,
    Region: 'Wellington Dufferin Guelph',
    code: 3566,
    coordinate: { lat: 43.5345361, lng: -80.4102076 },
    Polygon: Guelph,
  },
  {
    id: 33,
    Region: 'Windsor-Essex',
    code: 3568,
    coordinate: { lat: 42.2951067, lng: -83.0729216 },
    Polygon: Windsor,
  },
  {
    id: 34,
    Region: 'York',
    code: 3570,
    coordinate: { lat: 43.89973098887549, lng: -79.43899133899629 },
    Polygon: York,
  },
];
