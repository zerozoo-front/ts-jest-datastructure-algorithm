function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = 'report';
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const a = new BugReport('name');
a.title = 'CC';
console.log(a.title);

function tamu(c: Function): void {
  console.log('hi test1');
}

@tamu
class SimpleClassDeco {
  shout() {
    console.log('SHOUT!!!');
  }
}
