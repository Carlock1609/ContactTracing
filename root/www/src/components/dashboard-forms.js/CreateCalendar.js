import React, { useState } from 'react';
import { Link, withRouter } from 'react-rotuer-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const CreateCalendar = () => {
    const [formData, setFormData] = useState(
        
    );

    return (
        <div>
            
        </div>
    )
};

CreateCalendar.propTypes = {
    prop: PropTypes
};

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCalendar);
