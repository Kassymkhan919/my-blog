import React, {useState, useEffect} from 'react'
import axios from 'axios'

const BASE_URL = "https://gateway.marvel.com"
const APP_ID = "6080f23128f5a5159b440666"
const apikey ='440b5d3826a08f690b5b073d6d31ebb9'

const FetchData = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios.get(`${BASE_URL}/v1/public/characters`, { headers: { 'apikey': apikey, 'name': 'spider-man' } })
            .then(({ data }) => setData(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    },[])

    return (
        <div>
            {JSON.stringify(data)}
        </div>
        
    )
}

export {FetchData}

// const getMarvelCharacter = () =>  {

//     const [loading, setLoading] = useState(false)
//     const [data, setData] = useState(null)

//     useEffect(() => {
//         setLoading(true)
//         axios.get(`${BASE_URL}/v1/public/characters`, { headers: { 'apikey': apikey, 'name': 'spider-man' } })
//             .then(({ data }) => setData(data))
//             .catch(console.error)
//             .finally(() => setLoading(false));
//     },[])

//     return (
//         <div>
//             {JSON.stringify(data)}
//         </div>
        
//     )

// }