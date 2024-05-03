'use client'

import { IUser } from '@/types/IUser';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

type Props = {}

export default function addUser({ }: Props) {
    const router = useRouter();
  const [firstName , setFirstName] = useState<string>('');
  const [lastName , setLastName] = useState<string>('');
  const [phoneNumber , setPhoneNumber] = useState<string>('');
  const [email , setEmail] = useState<string>('');

  const handleAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data: IUser = {
        first_name : firstName,
        last_name : lastName,
        phone_number : phoneNumber,
        email
    }

    const response = await axios.post("https://663489e89bb0df2359a1d0a8.mockapi.io/api/v1/user", data)
    if(response.status === 201 ){
        alert("add user success")
        router.push("/")
    }else{
        alert('Add user failed')
    }
}
  
    return (
    <>
        <h1>Add User</h1>
        <form>
            <label>First Name: </label>
            <input type="text" name='firstName' required onChange={(e) => {setFirstName(e.target.value)}} value={firstName}/>
            <br />
            <label>Last name: </label>
            <input type="text" name='lastName'  onChange={(e) => {setLastName(e.target.value)}} value={lastName}/>
            <br />
            <label>Phone Number: </label>
            <input type="text" name='phoneNumber'  onChange={(e) => {setPhoneNumber(e.target.value)}} value={phoneNumber}/>
            <br />
            <label>Email: </label>
            <input type="email" name='email'  onChange={(e) => {setEmail(e.target.value)}} value={email}/>
            <br />
            <button type='submit' onClick={handleAdd}>Add</button>
        </form>
    </>
  )
}