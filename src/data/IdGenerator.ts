const idGenerator = function* () {
  let i = 6;
  while (true) {
    yield i++;
  }
};

const IdGenerator = idGenerator();

export default IdGenerator;
