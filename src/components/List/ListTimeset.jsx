import React, { useState } from 'react'
import Time from '../../assets/img/list/time.svg'
import { motion } from 'framer-motion'

const ListTimeset = ({ setSelectedTime, today, selectedTime }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [allday, setAllday] = useState(false);

    const times = ['0:00 AM', '1:00 AM', '2:00 AM', '3:00 AM',
        '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM',
        '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
        '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
        '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM', '12:00 PM'];

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const selectTime = (time) => {
        setSelectedTime(time);
        setDropdownOpen(false);
    };

    const toggleAllday = () => setAllday(!allday);

    return (
        <div className="timeset">
            <div>
                <div className="time-picker" onClick={toggleDropdown}>
                    <img src={Time} alt="Time" />
                    <div>
                        <p>{today}</p>
                        <h3>{selectedTime}</h3>
                    </div>
                </div>
                {dropdownOpen && (
                    <motion.div className="time-dropdown" initial={{ height: 0, opacity: 0 }} animate={{ height: '180px', opacity: 1 }} transition={{ duration: 1, type: "spring" }}>
                        {times.map((time, index) => (
                            <div key={index} className="time-option" onClick={() => selectTime(time)}>
                                {time}
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>
            <button onClick={toggleAllday} className={`allday-btn ${allday ? 'all' : ''}`}>
                하루종일
            </button>
        </div>
    )
}

export default ListTimeset