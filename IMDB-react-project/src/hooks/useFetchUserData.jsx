import axios from "axios"
import { useEffect, useState } from "react"

const useFetchUserData = () => {
    const [userData, setUserData] = useState({})
    const fetchingUri = "http://localhost:3000/status"

    useEffect(() => {
        async function handleFetch() {
            try {
                const response = await axios.get(fetchingUri, {withCredentials: true});
                setUserData(response.data);
            } catch (error) {
                console.log(error)
            }
        }

        handleFetch()
    }, [])

    return userData
}

export default useFetchUserData;