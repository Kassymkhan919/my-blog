import { useState , useEffect} from 'react'
import {FetchData} from '../lib/fetchData'
import utilStyles from '../styles/utils.module.css'

export default function Characters({allDogData}) {
    return (
        <>
        <h1>
            {allDogData.map(({id, name}) => {
                <li className={utilStyles.listItem} key={id}>
                    {name}
                </li>
            })}
        </h1>
            
        </>
    )
}

const getDogData = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState()

    // useEffect(() => {
    //     setLoading(true)
    //     axios.get(`${BASE_URL}/v1/public/characters`, { headers: { 'apikey': apikey, 'name': 'spider-man' } })
    //         .then(({ data }) => setData(data))
    //         .catch(console.error)
    //         .finally(() => setLoading(false));
    // },[])



    return (
        data
    )
}

const DOG_API = "3e149cf6-70ea-4d87-a696-4cf56cce9631"

export async function getStaticProps() {
    // const allDogData = await fetch('https://api.thedogapi.com/v1/breeds?attach_breed=Affenpinscher', {headers:{'x-api-key': DOG_API}})
    // const processeddata = JSON.stringify(allDogData)
    
    const [data, setData] = useState()
    useEffect(() => {
        // setLoading(true)
        axios.get(`https://api.thedogapi.com/v1/breeds?attach_breed=Affenpinscher`, { headers: { 'x-api-key': DOG_API } })
            .then(({ data }) => setData(data))
            .catch(console.error)
    },[])


    
    
    const jsonDog = JSON.stringify(allDogData)
    console.log("THIS IS RESPONSE" + allDogData)
    return {
        props:{
            
            jsonDog
        }
    }

}