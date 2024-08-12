import axios from "axios";
import { ReqResUser, User } from "../interfaces/reqres.interface";
import { useEffect, useRef, useState } from "react";




const loadUser = async (page: number = 1): Promise<User[]> => {
    try {
      const {data} = await axios.get<ReqResUser>('https://reqres.in/api/users', {
        params: {
          page: page,
        },
      });
  
      return data.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

export const useUser =()=>{

    const [users, setUsers] = useState<User[]>([]);
    const currentPage = useRef(1);
  
    useEffect(() => {
      loadUser(currentPage.current).then(response => setUsers(response));
    }, []);
  
    const prevPage = async () => {
      if (currentPage.current < 1) return;
      currentPage.current--;
      const user = await loadUser(currentPage.current);
      setUsers(user);
    };
  
    const nextPage = async () => {
      currentPage.current++;
      const user = await loadUser(currentPage.current);
      if (user.length > 0) {
        setUsers(user);
      } else {
        currentPage.current--;
      }
    };

    return {
users,
prevPage,
nextPage,
    }
}