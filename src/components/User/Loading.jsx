import React from 'react'
import Logo from '../../assets/img/user/logo.png'
import { motion } from 'framer-motion'

const Loading = () => {
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
}

export default Loading
