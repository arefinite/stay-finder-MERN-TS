import { useQuery } from "@tanstack/react-query"
import {validateUser} from './api'
export const useValidateUser = () => {
    return useQuery({
        queryKey: ['validate-user'],
        queryFn: validateUser
    })
}