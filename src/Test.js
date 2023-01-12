import React from 'react'

const TestComponent = ({myData}) =>{

    console.log(myData, 'in test')
    console.log(typeof(myData))
    const q = myData[0].question
    console.log(q, 'asd')
    return (
        <>
            <h1>Test</h1>
            {myData.map((data)=>{
                console.log(data, 'in ret')
            })}
            
        </>
    )
}

export default TestComponent