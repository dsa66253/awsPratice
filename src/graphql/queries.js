import { gql } from '@apollo/client';

export const QUERY_ORDERS = gql`
query Query{
  queryOrders {
    id
    tableNo
    time
    totalPrice
    items {
      id
      name
      quantity
      price
      note
      status
    }
  }
}
`;

export const QUERY_ITEMS = gql`
query Items($restaurantId: ID!) {
  items(restaurantID: $restaurantId) {
    id
    name
    price
    description
    img
  }
}`;
