import { useState } from "react"

export function Forms() {
    const [formData, setFormData]=useState({name:"",age:"",password:""});
    const handleOnchange = (e) => {
        const data = {
            ...formData,
            [e.target.name]:e.target.value
        }
        setFormData(data);
    }
    const handleOnclick = (e) => {
        e.preventDefault();
    }
    return <form onClick={handleOnclick}>
        <input onChange={handleOnchange} type="text" name="name" placeholder="Enter name"/>
        <input onChange={handleOnchange} type="number" name="age" placeholder="Enter Age"/>
        <input onChange={handleOnchange} type="text" name="password" placeholder="Enter password"/>
        <input onChange={handleOnchange} type="submit" value="Submit" />
    </form>
}