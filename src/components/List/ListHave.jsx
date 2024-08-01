import React from 'react'
import Evelist from './ListHave/Evelist'
import Lifelist from './ListHave/Lifelist'

const ListHave = ({setWhat, setWrite, everydata, lifedata, recom, setText, setEverydata, setLifedata }) => {

    return (
        <div className="main">
            <Lifelist setEverydata={setEverydata} setLifedata={setLifedata} setWhat={setWhat} setWrite={setWrite} recom={recom} setText={setText} lifedata={lifedata} everydata={everydata} />
            <Evelist setEverydata={setEverydata} setLifedata={setLifedata} setWhat={setWhat} setWrite={setWrite} recom={recom} setText={setText} lifedata={lifedata} everydata={everydata} />
        </div>
    )
}

export default ListHave