/* eslint-disable class-methods-use-this */
// types of data
const PEOPLE = 'people';
const PLANETS = 'planets';
// const STARSHIPS = 'starships';

export default class SwapiService {
  _APIBASE = 'https://swapi.dev/api/';

  async getResource(url) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, reseived ${res.status}`);
    }

    return res.json();
  }

  async getAllData(type) {
    const res = await this.getResource(`${this._APIBASE}${type}/`);
    return res.results;
  }

  getItem(type, id) {
    return this.getResource(`${this._APIBASE}${type}/${id}`);
  }
}

const swapi = new SwapiService();

swapi.getAllData(PLANETS).then((persons) => {
  console.log(persons);
});

swapi.getItem(PEOPLE, 5).then((person) => {
  console.log(person);
});
