// Importing React library
import React from 'react';

// Importing components from 'react-circular-progressbar' library
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Importing custom HalfCircleProvider component
import HalfCircleProvider from './HalfCircleProvider';

// HalfCircleBar component
const HalfCircleBar = (props) => {

    // Extracting 'skill' prop from the props
    const skill = props.skill;

    // Rendering HalfCircleProvider with CircularProgressbar inside
    return (
        <HalfCircleProvider valueStart={0} valueEnd={skill}>
            {(value) => (
                <CircularProgressbar
                    value={value}
                    circleRatio={0.5}
                    styles={buildStyles({
                        pathTransition: 'stroke-dashoffset 2s ease 0s',
                        rotation: 0.75,
                        pathColor: `hsl(${value * 1.2}, 100%, 50%)`
                    })}
                    strokeWidth={10}
                />
            )}
        </HalfCircleProvider>
    )
}

export default HalfCircleBar