/* Stacks! */

// functions: push, pop, peek, length
class Stack {
  count: number;
  storage: any;

  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value: any): void {
    this.storage[this.count] = value;
    this.count++;
  }
  pop(): any {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const result: any = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  size(): number {
    return this.count;
  }
  peek(): any {
    return this.storage[this.count - 1];
  }
}
const deem = new Stack();
deem.push(1);
deem.push(2);
deem.push(3);
console.log(deem.peek()); // 3
console.log(deem.pop()); // 3
console.log(deem.peek()); // 2
