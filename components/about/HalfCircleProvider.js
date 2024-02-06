// Importing React library
import React from 'react'

// HalfCircleProvider component
const HalfCircleProvider = ({ valueStart, valueEnd, children }) => {

    // Using state to manage the current value
    const [value, setValue] = React.useState(valueStart);

    // useEffect to update the value when valueEnd changes
    React.useEffect(() => {
        setValue(valueEnd);
    }, [valueEnd]);
    
    // Render the children with the current value
    return children(value);
}

export default HalfCircleProvider