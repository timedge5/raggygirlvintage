const snapshotToArray = (snapshot) => {
  var returnArr = [];

  snapshot.forEach((childSnapshot) => {
    var item = childSnapshot.data();
    item.id = childSnapshot.id;

    returnArr.push(item);
  });

  return returnArr;
};

module.exports = snapshotToArray;
