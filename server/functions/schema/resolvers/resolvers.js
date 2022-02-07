const snapshotToArray = require("../util/snapshot");
const db = require("../../config");

const resolvers = {
  Query: {
    // get all products
    products: () => {
      return db
        .collection("products")
        .get()
        .then((doc) => snapshotToArray(doc))
        .catch((err) => console.log(err));
    },
    // get a single product
    product: (_, args) => {
      return db
        .collection("products")
        .doc(args.id)
        .get()
        .then((doc) => {
          if (doc.exists) return doc.data();
        })
        .catch((err) => console.log(err));
    },
    // get all products of a certain type
    product_types: (_, args) => {
      return db
        .collection("products")
        .where("type", "==", args.type)
        .get()
        .then((doc) => snapshotToArray(doc))
        .catch((err) => console.log(err));
    },
    // get all orders
    orders: (_, args) => {
      return db
        .collection("orders")
        .get()
        .then((doc) => snapshotToArray(doc).catch((err) => console.log(err)));
    },
    // get single order
    order: (_, args) => {
      return db
        .collection("orders")
        .doc(args.id)
        .get()
        .then((doc) => {
          if (doc.exists) return doc.data();
        })
        .catch((err) => console.log(err));
    },
  },

  Mutation: {
    // add product
    add_product: (_, args) => {
      return db
        .collection("products")
        .add(args)
        .then((doc) => {
          return db
            .collection("products")
            .doc(doc.id)
            .get()
            .then((res) => {
              db.collection("products").doc(doc.id).update({ id: res.id });
              return { ...res.data(), id: res.id };
            });
        })
        .catch((err) => console.log(err));
    },
    // update product
    update_product: (_, args) => {
      return db
        .collection("products")
        .doc(args.id)
        .update(args.updates)
        .catch((err) => console.log(err));
    },
    // delete product
    delete_product: (_, args) => {
      return db
        .collection("products")
        .doc(args.id)
        .get()
        .then((doc) => {
          if (!doc.exists) return;
          return db.collection("products").doc(args.id).delete();
        })
        .catch((err) => console.log(err));
    },
    // add order
    add_order: (_, args) => {
      return db
        .collection("orders")
        .add(args)
        .then((doc) => {
          return db
            .collection("orders")
            .doc(doc.id)
            .get()
            .then((res) => {
              db.collection("orders").doc(doc.id).update({ id: res.id });
              return { ...res.data(), id: res.id };
            });
        })
        .catch((err) => console.log(err));
    },
    // update order
    update_order: (_, args) => {
      return db
        .collection("orders")
        .doc(args.id)
        .update(args.updates)
        .catch((err) => console.log(err));
    },
    // delete order
    delete_order: (_, args) => {
      return db
        .collection("orders")
        .doc(args.id)
        .get()
        .then((doc) => {
          if (!doc.exists) return;
          return db.collection("orders").doc(args.id).delete();
        })
        .catch((err) => console.log(err));
    },
  },
};

module.exports = resolvers;
