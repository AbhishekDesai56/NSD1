const object1 = { property1: "Value 1" };
const object2 = { property2: "Value 2" };

const listOfObjects = [object1, object2];
const copyOfListOfObjects = [...listOfObjects];

function updateObjects(objects) {
    return objects.map((object) => {
      const newObject = {...object};
  
      Object.keys(newObject).map((property) => {
        newObject[property] = "Updated value";
      });
  
      return newObject;
    });
  }
const listOfUpdatedObjects = updateObjects(listOfObjects);

console.log(listOfObjects);
console.log(copyOfListOfObjects);
console.log(listOfUpdatedObjects);