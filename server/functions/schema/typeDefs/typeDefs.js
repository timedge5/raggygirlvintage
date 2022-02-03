const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    archived: Boolean
    featured: Boolean
    sale: Boolean
    type: String
    value: String
    description: String
    images: [Image]
    name: String
    price: String
    quantity: Int
  }

  type Image {
    id: String
  }

  input ImageInput {
    id: String!
  }

  input updatesInput {
    archived: Boolean
    featured: Boolean
    sale: Boolean
    type: String
    value: String
    description: String
    name: String
    price: String
    quantity: Int
    images: [ImageInput]
  }

  type Order {
    number: String
    address: String
    city: String
    country: String
    province: String
    zipcode: String
    email: String
    name: String
  }

  type Query {
    products: [Product]
    product(id: String!): Product
    product_types(type: String!): [Product]
  }

  type Mutation {
    add_product(
      archived: Boolean!
      featured: Boolean!
      sale: Boolean!
      type: String!
      value: String!
      description: String!
      name: String!
      price: String!
      quantity: Int!
      images: [ImageInput]!
    ): Product
    update_product(id: String!, updates: updatesInput!): Product
    delete_product(id: String!): Product
  }
`;

module.exports = typeDefs;
