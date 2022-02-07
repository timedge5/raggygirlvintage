const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    id: ID
    archived: Boolean
    featured: Boolean
    sale: Boolean
    type: String
    value: String
    description: String
    images: [idString]
    name: String
    price: String
    quantity: Int
  }

  type idString {
    id: String
  }

  input idStringInput {
    id: String!
  }

  input updatesInput {
    id: ID!
    archived: Boolean
    featured: Boolean
    sale: Boolean
    type: String
    value: String
    description: String
    name: String
    price: String
    quantity: Int
    images: [idStringInput]
  }

  type Order {
    id: ID
    address: String
    city: String
    country: String
    province: String
    zipcode: String
    email: String
    name: String
    products: [idString]
  }

  input updateOrderInput {
    id: ID!
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
    product(id: ID!): Product
    product_types(type: String!): [Product]
    orders: [Order]
    order(id: ID!): Order
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
      images: [idStringInput]!
    ): Product
    update_product(id: ID!, updates: updatesInput!): Product
    delete_product(id: ID!): Product
    add_order(
      address: String!
      city: String!
      country: String!
      province: String!
      zipcode: String!
      email: String!
      name: String!
      products: [idStringInput]!
    ): Order
    update_order(id: ID!, updates: updateOrderInput!): Order
    delete_order(id: ID!): Order
  }
`;

module.exports = typeDefs;
