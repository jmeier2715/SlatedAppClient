import React, {useEffect, useState } from "react";

export default function AddCollection (){
    const [newCollection, setNewCollection] = useState ({
        title: '',
        userId: props.user._id
    })
}

const handleInputChange = (e) =>{
    setNewCollection({...newCollection, [e.target.name]: e.target.value })
}