// interface User {
//   name: string;
//   last_name: string;
//   surname?: string;
//   age: number | string;
// }

// function userToJson(user: User): string {
//   return JSON.stringify(user);
// }

function add(x: number | string, y: number | string) {
    if (typeof x == 'string' && typeof y == 'string') {
        return x.toString() + y.toString()
    }
    else if (typeof x =='number' && typeof y=="number") {
        return x + y;
    }
}