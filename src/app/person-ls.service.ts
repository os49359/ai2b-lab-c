import { Injectable } from '@angular/core';
import {Person} from "./person";

@Injectable({
  providedIn: 'root'
})
export class PersonLsService {
  readonly KEY = 'stored-people-data';
  constructor() { }

  public getAll(): Person[] {

    // set response people variable to an empty array
    // get data from localstorage
    // if anything was fetched, parse using JSON.parse() and assign to people
    // return all people

    let people: Person[] = [];
    let data = localStorage.getItem(this.KEY);

    if (data) {
      people = JSON.parse(data) || [];
    }

    return people;
  }

  public getPerson(index: number): Person {

    // get all people and return the one at [index] position

    const people = this.getAll();
    return people[index];
  }

  public addPerson(person: Person): void {

    // get all people
    // push person to the array of people
    // update localstorage with the array contents serialized using JSON.stringify()

    let people = this.getAll();
    people.push(person);
    localStorage.setItem(this.KEY, JSON.stringify(people));
  }

  public deletePerson(index: number): void {

    // get all people
    // use splice() to remove person at [index] position
    // update localstorage with the new values of people array

    let people = this.getAll();
    people.splice(index, 1);
    localStorage.setItem(this.KEY, JSON.stringify(people));
  }
}