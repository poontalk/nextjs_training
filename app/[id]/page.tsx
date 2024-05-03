'use client'

import { IUser } from '@/types/IUser';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

type Props = {}

export default function page({}: Props) {
  const param = useParams<{id : string}>();
  const [dataById , setDataById] = useState<IUser | null>(null);
  
  const getDataById = async () => {
    const response = await axios.get(`https://663489e89bb0df2359a1d0a8.mockapi.io/api/v1/user/${param.id}`)
    setDataById(response.data)
}

    useEffect(() => {
        getDataById()
    },[])

  return (
    <div>
        <h2 style={{margin: '10px'}}>Detail</h2>
        <label>First name: </label> {dataById?.first_name} <br/>
        <label>Last name: </label> {dataById?.last_name} <br/>
        <label>Phone number: </label> {dataById?.phone_number} <br/>
        <label>Email : </label> {dataById?.email} <br/>
    </div>
  )
}