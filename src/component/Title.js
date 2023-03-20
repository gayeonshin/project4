import React from 'react';

const Title = () => {
    let css1 = {
        marginTop: '45px',
        fontSize: '16px',
        letterSpacing: '5px'
    }
    let css2 = {
        marginBottom: '40px',
        fontFamily: 'Montserrat',
        fontSize: '27px',
        letterSpacing: '7px'
    }
    return (
        <div>
            <p style={css1}>PAIRING UNCONVENTIONAL COLORWAYS</p>
            <h2 style={css2}>COLORAMA</h2>
        </div>
    );
};

export default Title;