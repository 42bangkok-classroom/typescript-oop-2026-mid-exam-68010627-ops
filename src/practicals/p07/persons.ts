interface Person {
  firstName?: string;
  lastName?: string;
  age?: number;
}

function sortPersons(persons: Person[]): Person[] {
  return persons
    .filter(
      p =>
        typeof p.firstName === "string" &&
        p.firstName !== "" &&
        typeof p.lastName === "string" &&
        p.lastName !== "" &&
        typeof p.age === "number" &&
        p.age >= 0 &&
        p.age <= 100
    )
    .sort((a, b) => {
      if (a.age !== b.age) return a.age! - b.age!;
      if (a.firstName !== b.firstName) {
        return a.firstName!.localeCompare(b.firstName!);
      }
      return a.lastName!.localeCompare(b.lastName!);
    });
}