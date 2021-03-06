/* eslint-disable class-methods-use-this */
import toLocaleStr from './to-locale-str';

export default class SwapiService {
  _APIBASE = 'https://swapi.dev/api/';

  _IMAGEBASE = 'https://starwars-visualguide.com/assets/img/';

  async getResource(url) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, reseived ${res.status}`);
    }

    return res.json();
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`${this._APIBASE}planets/`);
    return res.results.map(this._transformPlanet);
  }

  getAllPeople = async () => {
    const res = await this.getResource(`${this._APIBASE}people/`);
    return res.results.map(this._transformPerson);
  }

  getAllStarships = async () => {
    const res = await this.getResource(`${this._APIBASE}starships/`);
    return res.results.map(this._transformStarship);
  }

  getPlanet = async (id) => {
    const item = await this.getResource(`${this._APIBASE}planets/${id}`);
    return this._transformPlanet(item);
  }

  getPerson = async (id) => {
    const item = await this.getResource(`${this._APIBASE}people/${id}`);
    return this._transformPerson(item);
  }

  getStarship = async (id) => {
    const item = await this.getResource(`${this._APIBASE}starships/${id}`);
    return this._transformStarship(item);
  }

  getPersonImage = ({ id }) => {
    return `${this._IMAGEBASE}characters/${id}.jpg`;
  }

  getPlanetImage = ({ id }) => {
    return `${this._IMAGEBASE}planets/${id}.jpg`;
  }

  getStarshipImage = ({ id }) => {
    return `${this._IMAGEBASE}starships/${id}.jpg`;
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
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

  _transformStarship = (starship) => {
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
