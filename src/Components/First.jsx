import React from "react";
import { useState } from "react";
const First=()=>
{
    let [data,updateName]=useState("");
    let [list,updatelist]=useState([]);
    const change=(e)=>
    {
        updateName(e.target.value);
    }
    const update=()=>
    {
        if(!data)
        {
            
        }
        else
        {
            updatelist([...list,data]);
        }
        updateName("");
    }
    const removeall=()=>
    {
        updatelist([]);
    }
    const remove=(id)=>
    {
        let remainingList=list.filter((d)=>{
            return d!==id;
        })
        updatelist(remainingList);
    }
    return(
        <>
          <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 mt-5 box">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                <div className="mt-5 pt-3 box2">
                                    <h3 className="pb-2 text-center head">ToDo List</h3>
                                </div><br/><br/>
                               <div className="search-bar">
                                <input className="ms-4 inp" type="text" placeholder="Add Your List !" name="name" value={data} onChange={change} />
                                <button className="but" onClick={update}>add</button>
                                <button className="dlt-but" onClick={removeall}>delete all</button>
                               </div>
                                <br/>
                                <ol>
                                { list.map((v)=>{
                                    return(
                                        <>
                                        <div className="data" key={v}>                                    
                                            <li className="pt-3">{v}</li>
                                            <button className="li-but" onClick={()=>{remove(v)}}>delete</button>                                     
                                        </div>
                                        </>
                                    )
                                })}
                                </ol>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default First;
