import 'reflect-metadata';

import {Inject, Injectable} from "../lib/metadata";

/**
 * yarn tsc -p test/tsconfig.json && node test/dist-injectable/test/injectable_spec.js
 *
 * yarn ts-node -P test/tsconfig.json test/injectable_spec.ts
 */

const TOKEN = 'test_token';

export class Household {
  
}

@Injectable()
export class Advisor {
  constructor(@Inject(TOKEN) public token: string) {}
  // constructor(public household: Household) {}
}


class Point {
  x: number;
  y: number;
}

class Line {
  private _p0: Point;
  private _p1: Point;
  
  @validate
  set p0(value: Point) { this._p0 = value; }
  get p0() { return this._p0; }
  
  @validate
  set p1(value: Point) { this._p1 = value; }
  get p1() { return this._p1; }
}

function validate<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
  let set = descriptor.set;
  descriptor.set = function (value: T) {
    let type = Reflect.getMetadata("design:type", target, propertyKey);
    if (!(value instanceof type)) {
      throw new TypeError("Invalid type.");
    }
    set(value);
  }
}

class Line2 {
  private _p0: Point;
  private _p1: Point;
  
  @validate
  @Reflect.metadata("design:type", Point)
  set p0(value: Point) { this._p0 = value; }
  get p0() { return this._p0; }
  
  @validate
  @Reflect.metadata("design:type", Point)
  set p1(value: Point) { this._p1 = value; }
  get p1() { return this._p1; }
}
/*
// describe('Injectable 2', () => {
//
//   it('test Injectable', () => {
//     expect(true).toBeTruthy();
//   });
// });

function e(constructor) {
  Object.seal(constructor);
}

function f() {
  console.log("f(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target, propertyKey, descriptor);
  }
}

function g() {
  console.log("g(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target, propertyKey, descriptor);
  }
}

class C {
  @f()
  @g()
  method() {}
}

function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  }
}

@classDecorator
class Greeter {
  property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

console.log(new Greeter("world"));


function makeAA() {
  console.log('aa');
  
  return () => {
    return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
      console.log('bb');
    }
  };
  
  
}

const aa = makeAA();

class CC {
  @aa()
  methodCC() {}
}*/