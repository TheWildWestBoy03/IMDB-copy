import axios from "axios"
import { useEffect, useState } from "react"

const useFetchUserData = (fetchingUri) => {
    const [userData, setUserData] = useState({});

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