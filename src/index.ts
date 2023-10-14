const world = 'world';
console.log('hello world');


export function hello(who: string = world): string {
  return `Hello ${who}! `;
}