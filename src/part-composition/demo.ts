export class Demo {

  private people = [];
  private selectedPerson;

  constructor(){
    this.people = [
      { firstName: "John", lastName: "Doe", favoriteColor: "blue" },
      { firstName: "Jane", lastName: "Doe", favoriteColor: "red" }
    ];

    this.selectedPerson = this.people[0];
  }

}
