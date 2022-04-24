import { useEffect, useState } from 'react'
import GitHubLabel from "./testSearchInputs"
import EnhancedTable from './table'

const query = `
  query ExampleQuery($skip: Int, $take: Int) {
    getAllEmployees(skip: $skip, take: $take) {
      id_employee
      shortName
      path_image
    }
  }
`

const variables = {
  "skip": 0,
  "take": 25
}

const baseUrl=  process.env.NEXT_PUBLIC_SERVICE_URL

const requester = (endpoint?: string, query?: string, variables?: { skip: number; take: number;} ) => 
  fetch(endpoint, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
   },
    body: JSON.stringify({query, variables})
  })

const useEmployees = () => {
  const [ searchResult, setSearchResult] = useState<searchEmployeeResults[]>([])
  const [ status, setStatus] = useState<'success' | 'loading' | 'error' | 'idle'>('idle')

  useEffect(()=> {
    const searchEmployee = async () => {
      setStatus('loading')
      try {      
        const response = await requester( baseUrl, query, variables )

        const { data } = ( await response.json()) as { data: searchEmployeeResults[]}
        setSearchResult(data.getAllEmployees)
        setStatus('success')
      } catch (error) {
        setStatus('error')
        console.log('Something went wrong!', error)
      }
    }
    searchEmployee()
  }, [])

  return {searchResult, status}

}

function HomePage() {
  const [ rows, setRows] = useState([])
  const { searchResult, status } = useEmployees()

  console.log(searchResult, status)
  console.log('count', searchResult)

  return (
    <>
      { searchResult.length
        ? <GitHubLabel labels={searchResult} setRows={setRows}/>
        : <h1>No Info</h1>
      }
      <EnhancedTable rows={rows}/>
    </>
  );
}
  
export default HomePage