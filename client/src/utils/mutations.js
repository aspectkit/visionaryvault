import { gql} from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!){
        login(username: $username, password: $password){
            token
            
        }
    }
`;

export const ADD_ARTIST = gql`
    mutation addArtist($username: String!, $password: String!){
        addArtist(username: $username, password: $password){
            token
        }
    }
`;