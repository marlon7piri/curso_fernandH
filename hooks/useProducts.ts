import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ProductsResponse} from '../interfaces/reqres.interface';
import axiosAddapter from '../api/axios.config';

const fechData = async (): Promise<ProductsResponse> => {
  try {
    const response = await axiosAddapter.get<ProductsResponse>('/products');

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Error obteniendo los productos' + error);
  }
};

export const useProducts = () => {
  const [products, setProducts] = useState<ProductsResponse[]>([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    fechData()
      .then(respuesta => setProducts(respuesta))
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  return {
    products,
    isloading,
  };
};
