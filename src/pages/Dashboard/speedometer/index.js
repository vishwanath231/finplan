import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import { Card, CardBody } from 'reactstrap';

const styles = {
    dial: {
        display: "inline-block",
        width: `300px`,
        height: `auto`,
        color: "#000",
        border: "0.5px solid #fff",
        padding: "2px",
        textAlign: 'center'
        
    }
};

const SpeedometerDashboard = () => {
    return (
        <Card>
            <CardBody className=''>
                <h4 className='mt-1 mb-3'>Financial Risk</h4>
                <div className="text-center">
                    <div style={styles.dial}>
                        <ReactSpeedometer
                            maxValue={100}
                            minValue={1}
                            height={190}
                            width={290}
                            value={50}
                            needleTransition="easeQuadIn"
                            needleTransitionDuration={1000}
                            needleColor="black"
                            startColor="green"
                            segments={10}
                            endColor="red"
                        />
                    </div>
                </div>
            </CardBody>
        </Card>

    )
}

export default SpeedometerDashboard;