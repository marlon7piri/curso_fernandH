import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CofeResponse } from '../interfaces/reqres.interface';


const fechData = async (): Promise<CofeResponse> => {
  try {
    const { data, request } = await axios.get<CofeResponse>('https://api.sampleapis.com/coffee/hot');
    return data
  } catch (error) {
    console.log(error)
    return []
  }
};
export const useCoffe = () => {


  const [coffes, setCoffes] = useState<CofeResponse[]>([])



  useEffect(() => {
    fechData().then(respuesta => setCoffes(respuesta));
  }, []);



  return {
    coffes
  }
}
