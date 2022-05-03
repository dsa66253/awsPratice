import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
mutation CreateOrder($order: inputOrder) {
  createOrder(order: $order)
}
`;

export const CREATE_ITEM = gql`
mutation Mutation($data: CreateItemInput!) {
  createItem(data: $data) {
    id
    name
    description
    img
    price
  }
}
`;

export const UPDATE_ITEM = gql`
mutation Mutation($updateItemId: String!, $data: UpdateItemInput!) {
  updateItem(id: $updateItemId, data: $data) {
    id
    name
    price
    description
  }
}
`;

export const DELETE_ITEM = gql`
mutation DeleteItem($deleteItemId: String!) {
  deleteItem(id: $deleteItemId) {
    id
    name
    description
  }
}
`;
