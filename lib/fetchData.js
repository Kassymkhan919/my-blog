import React, {useState, useEffect} from 'react'
import axios from 'axios'

const BASE_URL = ""
const APP_ID = "6080f23128f5a5159b440666"

const FetchData = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) => setData(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [])
    // setData(JSON.stringify(data))
    return (
        <div>
            {loading && "Loading..."}
            {/* {data.map(({userId, id, title, completed}) => (
                <li className={utilStyles.listItem} key={id}>
                    {title}
                </li>
            ))} */}
            {JSON.stringify(data)}
        </div>
    )
}

export {FetchData}