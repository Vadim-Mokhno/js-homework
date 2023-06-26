const showUser = function (id) {
  if (typeof id !== 'number' || Number.isNaN(id)) {
    throw new TypeError('The value of user id must be a number');
  }

  if (id < 0) {
    throw Error(`ID must not be negative: ${id}`);
  }

  return { id };
};

const showUsers = function (ids) {
  if (!Array.isArray(ids)) {
    throw new TypeError('The value of parameter "ids" must be an array');
  }

  const users = new Array();

  for (const id of ids) {
    try {
      users.push(showUser(id));
    } catch (e) {
      console.error(e.name + ': ' + e.message);
    }
  }

  return users;
};

console.log(showUsers([7, -12, 44, 22, -55, 45]));
