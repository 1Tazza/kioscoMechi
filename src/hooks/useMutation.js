import { useState} from "react"
import { useDispatch } from "react-redux" 
import axiosClient from "../config/axios"

const useMutation = ({url, method = "POST"}) => {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        isLoading: false,
        error: ""
    })

    const fn = async(data) => {
        setState(prev => ({
            ...prev,
            isLoading: true
        }));

        axiosClient({url, method, data})
        .then(()=> {
           
            setState({isLoading: false, error: ""})
        })
        .catch( error => {
            setState({isLoading: false, error: error.message})
        })
    }

    return {mutate: fn, ...state}
}

export default useMutation