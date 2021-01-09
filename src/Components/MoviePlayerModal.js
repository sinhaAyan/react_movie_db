import React from 'react';
import './moviePlayerModal.css';

function MoviePlayerModal({ show, children, modalClosed }) {
    const divStyle = {
        display: show ? 'block' : 'none'
    };


    return (
        <div className="moviePlayerModal"
            style={{
                transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: show ? 1 : 0,
                divStyle,
            }}>
            <div className="moviePlayerModal_content" onClick={e => e.stopPropagation()} >
                <span
                    className="moviePlayerModal_close"
                    onClick={modalClosed}>&times;
             </span>
                {children}
            </div>
        </div>
    )
}

export default MoviePlayerModal
