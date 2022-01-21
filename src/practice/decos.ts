// Evaluation

function f(key: string): any {
  console.log('evaluate : ', key);
  return function (): void {
    console.log('call: ', key);
  };
}

function methodDecoratorEnumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

@f('haha hoho')
class C {
  @f('Static Property')
  static prop?: number;
  greeting: string;

  constructor(msg: string) {
    this.greeting = msg;
  }

  @methodDecoratorEnumerable(false)
  greet() {
    return 'Hello' + this.greeting;
  }
}
