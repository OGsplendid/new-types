import Cart from '../Cart';
import Movie from '../Movie';
import Cart2 from '../additionalTask/Cart2';
import Laptop from '../additionalTask/Laptop';
import Movie2 from '../additionalTask/Movie2';

test('should return correct total sum', () => {
  const film = new Movie(115, 'Gone with the Wind', 1939, 'USA', '', 238, 199);
  const film2 = new Movie(138, 'Il buono, il brutto, il cattivo', 1966, 'Italy', '', 177, 99);
  let cart = new Cart();
  cart.add(film);
  cart.add(film2);
  expect(cart.countAll()).toBe(298);
});

test('should return correct object', () => {
  const film = new Movie(115, 'Gone with the Wind', 1939, 'USA', '', 238, 199);
  const film2 = new Movie(138, 'Il buono, il brutto, il cattivo', 1966, 'Italy', '', 177, 99);
  let cart = new Cart();
  cart.add(film);
  cart.add(film2);
  expect(cart.getAll()).toEqual([
    {
      "country": "USA", 
    "id": 115, 
    "length": 238, 
    "name": "Gone with the Wind", 
    "price": 199, 
    "tagline": "", 
    "year": 1939
    },
    {
    "country": "Italy", 
    "id": 138, 
    "length": 177, 
    "name": "Il buono, il brutto, il cattivo", 
    "price": 99, 
    "tagline": "", 
    "year": 1966
    }]);
});

test('should return correct total sum with discount', () => {
  const film = new Movie(115, 'Gone with the Wind', 1939, 'USA', '', 238, 199);
  const film2 = new Movie(138, 'Il buono, il brutto, il cattivo', 1966, 'Italy', '', 177, 99);
  let cart = new Cart();
  cart.add(film);
  cart.add(film2);
  expect(cart.countAllWithDiscount(10)).toBe(268.2);
});

test('should delete an item', () => {
  const film = new Movie(115, 'Gone with the Wind', 1939, 'USA', '', 238, 199);
  const film2 = new Movie(138, 'Il buono, il brutto, il cattivo', 1966, 'Italy', '', 177, 99);
  let cart = new Cart();
  cart.add(film);
  cart.add(film2);
  cart.delete(115);
  expect(cart.items.length).toBe(1);
});

test('should return correct array', () => {
  const film = new Movie2(115, 'Gone with the Wind', 199, 1, false);
  const gadget = new Laptop(35, 'Samsung', 35000, 0, true);
  let cart = new Cart2();
  cart.add(film);
  cart.add(film);
  cart.add(film);
  cart.add(gadget);
  cart.add(gadget);
  cart.add(gadget);
  expect(cart.getAll()).toEqual([
    {"countable": false, "id": 115, "name": "Gone with the Wind", "price": 199, "quantity": 1},
    {"countable": true, "id": 35, "name": "Samsung", "price": 35000, "quantity": 3}
  ]);
});

test('should return correct total sum with discount', () => {
  const film = new Movie2(115, 'Gone with the Wind', 199, 1, false);
  const gadget = new Laptop(35, 'Samsung', 35000, 0, true);
  let cart = new Cart2();
  cart.add(film);
  cart.add(film);
  cart.add(film);
  cart.add(gadget);
  cart.add(gadget);
  cart.add(gadget);
  expect(cart.countAllWithDiscount(50)).toBe(52599.5);
});

test('should return correct array', () => {
  const film = new Movie2(115, 'Gone with the Wind', 199, 1, false);
  const gadget = new Laptop(35, 'Samsung', 35000, 0, true);
  let cart = new Cart2();
  cart.add(film);
  cart.add(film);
  cart.add(film);
  cart.add(gadget);
  cart.add(gadget);
  cart.add(gadget);
  cart.delete(35);
  expect(cart.getAll()).toEqual([
    {"countable": false, "id": 115, "name": "Gone with the Wind", "price": 199, "quantity": 1},
    {"countable": true, "id": 35, "name": "Samsung", "price": 35000, "quantity": 2}
  ]);
});

test('should return correct array', () => {
  const film = new Movie2(115, 'Gone with the Wind', 199, 1, false);
  const gadget = new Laptop(35, 'Samsung', 35000, 0, true);
  let cart = new Cart2();
  cart.add(film);
  cart.add(film);
  cart.add(film);
  cart.add(gadget);
  cart.add(gadget);
  cart.add(gadget);
  cart.delete(115);
  expect(cart.items.length).toBe(1);
});

