import './shoppingCart.js';
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

console.log('importing module');

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateDeepClone = cloneDeep(state);
const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

console.log('Page will not reload');

if (module.hot) {
  module.hot.accept();
}
