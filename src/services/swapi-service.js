/* eslint-disable class-methods-use-this */
import toLocaleStr from './to-locale-str';

export default class SwapiService {
  _APIBASE = 'https://swapi.dev/api/';

  async getResource(url) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, reseived ${res.status}`);
    }

    return res.json();
  }

  // types of data: 'people', 'planets', 'starships';
  async getAllData(type) {
    const res = await this.getResource(`${this._APIBASE}${type}/`);

    let handler;

    switch (type) {
      case 'planets':
        handler = this._transformPlanet;
        break;
      case 'people':
        handler = this._transformPerson;
        break;
      case 'starships':
        handler = this._transformStarship;
        break;
      default:
        handler = this._transformPlanet;
    }

    return res.results.map(handler);
  }

  async getItem(type, id) {
    const item = await this.getResource(`${this._APIBASE}${type}/${id}`);

    switch (type) {
      case 'planets':
        return this._transformPlanet(item);
      case 'people':
        return this._transformPerson(item);
      case 'starships':
        return this._transformStarship(item);
      default:
        return this._transformPlanet(item);
    }
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: toLocaleStr(planet.population),
      rotationPeriod: toLocaleStr(planet.rotation_period),
      diameter: toLocaleStr(planet.diameter),
    };
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      height: person.height,
      hairColor: person.hair_color,
      eyeColor: person.eye_color,
    };
  }

  _transformStarship(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: toLocaleStr(starship.cost_in_credits),
      length: toLocaleStr(starship.length),
      crew: toLocaleStr(starship.crew),
      passengers: toLocaleStr(starship.passengers),
      cargoCapacity: toLocaleStr(starship.cargo_capacity),
    };
  }
}
