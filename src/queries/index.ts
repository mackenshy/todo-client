import {gql} from '@apollo/client';

export const PROJECT_QUERY = gql`
  query GetProjects {
    projects {
      _id
      name
    }
  }
`;
