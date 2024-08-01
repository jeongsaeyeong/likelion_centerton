import React, { useEffect, useState } from 'react'
import MyChracternone from './MyChracternone'
import MyCharacterChoose from './MyCharacterChoose'
import MyCharacterYes from './MyCharaterYes/MyCharacterYes'
import axios from 'axios'
import { PulseLoader } from 'react-spinners'

const MyChracter = () => {
    const [have, setHave] = useState(false)
    const [create, setCreate] = useState(false)
    const [data, setData] = useState([])
    const [check, setCheck] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get('http://3.25.237.92:8000/characters/', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.data[0] === undefined) {
                    console.log('데이터가 없어용')
                    setHave(false)
                } else {
                    setData([...res.data])
                    setHave(true)
                    setLoading(true)
                }
            })
    }, [check])

    return (
        <> {loading ? (
            <div className='container'>
                {have ? (
                    <MyCharacterYes data={data} setCheck={setCheck} check={check} />
                ) : (
                    <>
                        {create ? (
                            <MyCharacterChoose setHave={setHave} />
                        ) : (
                            <MyChracternone setCreate={setCreate} />
                        )}
                    </>
                )}
            </div>
        ) : (
            <div className="container loading_wrap">
                <PulseLoader />
            </div>
        )}

        </>
    )
}

export default MyChracter