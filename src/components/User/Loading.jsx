<<<<<<< HEAD
import React from 'react'
import Logo from '../../assets/img/user/logo.png'

const Loading = () => {
  return (
    <div className='user-loading container'>
        <img src={Logo} alt="로고" />
      
    </div>
  )
=======
import React, { useEffect } from 'react'
import Logo from '../../assets/img/user/logo.png'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Loading = ({ setLoding, login }) => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            setLoding(true)
        }, (2500));

        setTimeout(() => {
            if (login) {
                navigate('/')
            } else {
                navigate('/login')
            }
        }, (1800));
    })

    return (
        <div className='user-loading container'>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 150
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 1.5,
                    type: "spring"
                }}>
                <img src={Logo} alt="로고" />
            </motion.div>
        </div>
    )
>>>>>>> a3ee1af2a8b25492a78f9e388b76cdb33f7e84e7
}

export default Loading
