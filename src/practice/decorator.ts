function first() {
  console.log('first(): factory evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('first(): called');
    console.log('hello decorator? it seems java annotation ');
  };
}

function second() {
  console.log('second(): factory evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('second(): called');
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
}
const newOne = new ExampleClass();
newOne.method();

function simpleDecorator() {
  console.log('simpleDecorator evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('deco!');
  };
}
function heyDeco() {
  return function (t: any, p: string, d: PropertyDescriptor) {
    console.log('heyDeco');
  };
}

class SimpleClass {
  @simpleDecorator()
  @heyDeco()
  sayHi() {
    console.log('hi');
  }
}
