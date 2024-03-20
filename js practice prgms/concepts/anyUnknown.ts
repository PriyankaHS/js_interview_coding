let anyVariable: any;
let unknownVariable: unknown;

let someString: string = anyVariable; // No error with 'any'
// let anotherString: string = unknownVariable; // Error: Type 'unknown' is not assignable to type 'string'

// Type assertion is required with 'unknown'
let knownString: string = unknownVariable as string;

// Type checking is also allowed
if (typeof unknownVariable === 'string') {
  let stringTypeChecked: string = unknownVariable; // No error
}
