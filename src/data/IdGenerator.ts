const idGenerator = function* () {
  let i = 3;
  while (true) {
    yield i++;
  }
};

const IdGenerator = idGenerator();

export default IdGenerator;
