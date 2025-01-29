import orderByProps from '../user';

test('correct', () => {
  const obj = {
    name: 'мечник', 
    health: 10, 
    level: 2, 
    attack: 80, 
    defence: 40};

  expect(orderByProps(obj, ["name", "level"])).toEqual({name: 'мечник', level: 2, attack: 80, defence: 40, health: 10});

});

test('wrong', () => {
  expect(() => {
    const obj = {
      name: 'мечник', 
      health: 10, 
      level: 2, 
      attack: 80, 
      defence: 40};
      orderByProps(obj, ["namename", "level"])
  
  }).toThrow(new Error('Неверное свойство'));
});
 