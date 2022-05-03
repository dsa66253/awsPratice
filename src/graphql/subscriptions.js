import { gql } from '@apollo/client';

// TODO: check the official gql syntax
export const SUBSCRIPTION_ORDER = gql`
subscription Subscription($restautantId: ID!) {
  order(restautantID: $restautantId) {
    mutation
    data {
      restautantID
      tableNo
      id
      items {
        id
        name
        description
        price
        img
        orderItemInfo {
          quantity
          note
        }
      }
      time
      totalPrice
    }
  }
}
`;
