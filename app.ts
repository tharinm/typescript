// function add(x: number, y: number) {
//   return x + y;
// }

// add(5, 5);

function add(x: number | string, y: number | string): string | null {
  return x.toString();
}

add(2, "test");
