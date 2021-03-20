import React from 'react';

function Api({data,getApiData}){

    return (
        <div>
            {data}
            <button onClick={getApiData}>api</button>
        </div>
    )
}

export default Api;