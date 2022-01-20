/* Sets */

class MySet {
  collection: any[];
  constructor() {
    this.collection = [];
  }

  // this method will check for the presence of an element and return true or false
  has(element: any): boolean {
    return this.collection.indexOf(element) !== -1;
  }

  // this method will return all the values in the set
  values(): any[] {
    return this.collection;
  }

  // this method will add an element to the set
  add(element: any): boolean {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  // this method will remove an element from a set
  remove(element: any) {
    if (this.has(element)) {
      const index: number = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }
  // this method will return the size of the collection
  size(): number {
    return this.collection.length;
  }

  // this method will return the union of two sets
  union(otherSet: MySet): MySet {
    const unionSet: MySet = new MySet();
    const firstSet: any[] = this.values();
    const secondSet: any[] = otherSet.values();
    firstSet.forEach(function (el: any): void {
      unionSet.add(el);
    });
    secondSet.forEach(function (el: any): void {
      unionSet.add(el);
    });
    return unionSet;
  }

  // this method will return the intersection of two sets as a new set
  intersection(otherSet: MySet): MySet {
    const intersectionSet: MySet = new MySet();
    const firstSet: any[] = this.values();
    firstSet.forEach(function (el: any): void {
      if (otherSet.has(el)) {
        intersectionSet.add(el);
      }
    });
    return intersectionSet;
  }

  // this method will return the difference of two sets as a new set
  difference(otherSet: MySet): MySet {
    const differenceSet = new MySet();
    const firstSet: any[] = this.values();
    firstSet.forEach(function (el: any): void {
      if (!otherSet.has(el)) {
        differenceSet.add(el);
      }
    });
    return differenceSet;
  }

  // this method will test if the set is a subset of a different set
  subset(otherSet: MySet): boolean {
    const firstSet: any[] = this.values();
    return firstSet.every(function (value: any): boolean {
      return otherSet.has(value);
    });
  }
} //class

const setA: MySet = new MySet();
const setB: MySet = new MySet();
setA.add('kk');
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');
console.log(setA.values());
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());
const setC: MySet = new MySet();
const setD: MySet = new MySet();
setC.add('a');
setD.add('b');
setD.add('c');
setD.add('a');
setD.add('d');
console.log(setD.values());
setD.remove('a');
console.log(setD.has('a'));
console.log(setD.add('d'));
