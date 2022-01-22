/* Queues */

class Queue<T> {
  #collection: T[] = [];

  print(): void {
    console.log(this.#collection);
  }
  enqueue(element: T): void {
    this.#collection.push(element);
  }
  dequeue(): any {
    return this.#collection.shift();
  }
  front(): T {
    return this.#collection[0];
  }
  size(): number {
    return this.#collection.length;
  }
  isEmpty(): boolean {
    return this.#collection.length === 0;
  }
}
const nq = new Queue();
nq.enqueue(0);
nq.enqueue(1);
nq.enqueue(3);
console.log(nq.print()); // 0, 1, 'ss'
nq.dequeue();
console.log(nq.print()); //  1, 'ss'
nq.dequeue();
console.log(nq.print()); //  'ss'
nq.dequeue();
console.log(nq.print()); // []
nq.isEmpty() ? console.log('empty') : console.log(nq.print());

class PriorityQueue {
  #collections: [string, number][] = [];

  isEmpty(): boolean {
    return this.#collections.length === 0;
  }

  printCollection(): void {
    console.log(this.#collections);
  }

  enqueue(element: [string, number]): void {
    if (this.isEmpty()) {
      this.#collections.push(element);
    } else {
      let added: boolean = false;
      for (let i: number = 0; i < this.#collections.length; i++) {
        if (element[1] < this.#collections[i][1]) {
          this.#collections.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.#collections.push(element);
      }
    }
  }

  dequeue(): [string, number] | undefined {
    const value: [string, number] | undefined = this.#collections.shift();
    if (value) {
      return value;
    }
    return undefined;
  }

  front(): [string, number] {
    return this.#collections[0];
  }

  size(): number {
    return this.#collections.length;
  }
}

const pq: PriorityQueue = new PriorityQueue();
pq.enqueue(['one', 1]);
pq.enqueue(['four', 4]);
pq.enqueue(['two', 2]);
pq.enqueue(['five', 6]);
pq.enqueue(['three', 3]);
pq.enqueue(['six', 5]);
pq.dequeue();
pq.printCollection();
