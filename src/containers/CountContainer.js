import React from 'react';
import useStore from "../hooks/useStore"
import { inject, observer } from "mobx-react";
import Count from "../components/Count"

function CountContainer({store}){
    // const {store} = useStore();
    const {number,increase,decrease} = store.CountStore;

    return (
        <>
            <Count 
                number={number}
                increase={increase}
                decrease={decrease}
            />
        </>
    )
}

export default inject("store")(observer(CountContainer));