import React from 'react';
import ProfessionalCard from '../../cards/ProfessionalCard';
import ProfessionalAvailableCalendar from '../../cards/ProfessionalAvailableCalendar';

const ProfessionalDatesList = () => {

    return (
        <div className="professional-dates-display">
            <div className="professional-date">
                <div className='professional-card'>
                    <ProfessionalCard />
                </div>
                <div className="professional-available-calendar">
                    <ProfessionalAvailableCalendar />
                </div>
            </div>
            <br />

            <div className="professional-date">
                <div className='professional-card'>
                    <ProfessionalCard />
                </div>
                <div className="professional-available-calendar">
                    <ProfessionalAvailableCalendar />
                </div>
            </div>
            <br />

            <div className="professional-date">
                <div className='professional-card'>
                    <ProfessionalCard />
                </div>
                <div className="professional-available-calendar">
                    <ProfessionalAvailableCalendar />
                </div>
            </div>
            <br />
        </div>
    )
}

export default ProfessionalDatesList
