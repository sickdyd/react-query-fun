import { useQuery } from 'react-query'
import { request, gql } from 'graphql-request'

const endpoint = 'http://localhost:4000/graphql'

export default function useData() {
  return useQuery('data', async () => {
    const data = await request(
      endpoint,
      gql`
        query {
          hello
        }
      `
    )
    return data
  })
}
