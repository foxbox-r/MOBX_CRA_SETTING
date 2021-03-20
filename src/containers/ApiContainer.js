import React from 'react';
import {inject,observer} from "mobx-react"
import useStore from "../hooks/useStore"
import Api from "../components/Api"

const ApiContainer = ({}) => {

    const {store} = useStore();
    
    const {data,getApiData} = store.ApiStore;

    return (
        <>
            <Api data={data} getApiData={getApiData} />
        </>
    )
}

export default inject("store")(observer(ApiContainer));