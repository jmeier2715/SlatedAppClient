import React, {useEffect, useState } from "react";
import user from '../App'
import { useParams } from 'react-router'
import Link from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

const AddCollection = (props) => {

console.log(props.userId)
    const [newCollection, setNewCollection] = useState ({
        title: '',
        userId: props.userId
    })

    const postCollection = (e) => {
        e.preventDefault()
        let preBody = {
            title: newCollection.title,
            userId: "."
        }
    }

return(
    <>iphone</>
)
}
export default AddCollection