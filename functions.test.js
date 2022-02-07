const {
  returnTwo,
  greeting,
  add,
  multiply,
  divide,
  subtract,
} = require("./functions");

test("returnTwo", () => {
  expect(returnTwo()).toEqual(2);
});

test("greeting", () => {
  expect(greeting("James")).toEqual("Hello, James");
  expect(greeting("Jill")).toEqual("Hello, Jill");
});

describe("math functions", () => {
  test("add", () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(5, 9)).toEqual(14);
  });
  test("multiply", () => {
    expect(multiply(3, 4)).toEqual(12);
    expect(multiply(9, 9)).toEqual(81);
  });
  test("divide", () => {
    expect(divide(8, 4)).toEqual(2);
    expect(divide(44, 11)).toEqual(4);
  });
  test("subtract", () => {
    expect(subtract(33, 22)).toEqual(11);
    expect(subtract(81, 71)).toEqual(10);
  });
});
