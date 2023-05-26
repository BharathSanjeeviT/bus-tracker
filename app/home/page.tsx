"use client"
import axios from "axios"
import {useState} from "react"

const Home = () => {
 
    const[name,setName] = useState("")
    const[branch,setBranch] = useState("")
    const[location,setLocation] = useState("")

    const submit =  async (e) => {
        e.preventDefault()
        const reg = localStorage.getItem("user")
        const {data} = await axios.post('/api/details',{
                        reg,name,branch,location
        })
        console.log(data)
        setName("")
        setBranch("")
        setLocation("")
    }

    return(<>

        <div className="flex items-center justify-center w-[100vw] h-[100vh]">
        <form className="p-5 border shadow-md rounded-md" onSubmit={(e)=>submit(e)}>
            <label> Name <br/>
                <input className="h-8 p-2 my-2 border border-black rounded" onChange={(e)=>{setName(e.target.value)}} value={name}/>
                <br/>
            </label>
            <label> Branch<br/>
                <input className="h-8 p-2 my-2 border border-black rounded" onChange={(e)=>{setBranch(e.target.value)}} value={branch}/>
            </label>
            <br/>
            <label> Location<br/>
                <textarea className="h-24 p-2 my-2 border border-black rounded" onChange={(e)=>{setLocation(e.target.value)}} value={location}/>
            </label>
            <br/>
            <button type="submit" className="w-24 px-3 py-1 mt-2 font-bold text-black bg-transparent border-2 border-black transition-all rounded-md hover:bg-black hover:text-white">Submit</button>
        </form>
        </div>
    </>)
}

export default Home;