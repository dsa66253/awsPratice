import { gql } from "@apollo/client";

export const UPDATE_STATUS = gql`
  mutation updateStatus(
    $itemID: ID!
    $status: Status!
  ){
    updateStatus(
        data: {
            itemID: $itemID
            status: $status
        }
    ){
        id
        name
        status
    }
  }
`;