import React from 'react'
import Evelist from './ListHave/Evelist'
import Lifelist from './ListHave/Lifelist'

const ListHave = ({setChooseData, setWhat, setWrite, everydata, lifedata, recom, setText, setEverydata, setLifedata }) => {

    return (
        <div className="main">
            <Lifelist setChooseData={setChooseData} setEverydata={setEverydata} setLifedata={setLifedata} setWhat={setWhat} setWrite={setWrite} recom={recom} setText={setText} lifedata={lifedata} everydata={everydata} />
            <Evelist setChooseData={setChooseData} setEverydata={setEverydata} setLifedata={setLifedata} setWhat={setWhat} setWrite={setWrite} recom={recom} setText={setText} lifedata={lifedata} everydata={everydata} />
        </div>
    )
}

export default ListHave