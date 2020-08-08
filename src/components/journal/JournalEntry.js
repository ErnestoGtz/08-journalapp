import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture" style={{
                backgroundSize:'cover',
                backgroundImage:'url(https://lh3.googleusercontent.com/XDg-bt655am_Q-7X-I0s64Kq8SJKfb7BBTHkUVbFR6-zDNv9J7rW61xZn0BB3SVCJ6gz)'
            }}>

            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Amet labore pariatur mollit velit exercitation aliquip adipisicing sint labore culpa.
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}
