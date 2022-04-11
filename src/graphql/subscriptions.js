import { gql } from '@apollo/client';

// TODO: check the official gql syntax
export const SUBSCRIPTION_ORDER = gql`
subscription Subscription {
  order {
    id
    tableNo
    totalPrice
    time
    items {
      id
      name
      price
      quantity
      note
      status
    }
  }
}
`;
