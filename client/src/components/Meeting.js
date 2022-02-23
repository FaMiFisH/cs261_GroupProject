import React from "react";
import { useState, useEffect } from "react";

import {
    Card,
    Row,
    Col
} from "reactstrap";

// function Meeting( {meeting} ){

    // const {id, name, time, location, duration, description} = meeting;

//     return(
//         <>
//             <Card>
//                 <Row>
//                     <p>{name}</p>
//                     <p>{time}</p>
//                     {/* <p>{location}</p>
//                     <p>{duration}</p>
//                     <p>{description}</p> */}
//                 </Row>
//             </Card>
//         </>
//     );
// }
const meetings = [
        {
            id: 1,
            name: 'Meeting w/ Andrew',
            time: '21:00',
            location: 'Library',
            duration: '1h30',
            description: 'text1',
        },
        {
            id: 2,
            name: 'Engineering Meeting',
            time: '11:00',
            location: 'FAB',
            duration: '2h30',
            description: 'text2',
        },
        {
            id: 3,
            name: 'Workshop',
            time: '13:00',
            location: 'Grid',
            duration: '30 mins',
            description: 'text3',
        },
]

function Meeting(){
    // const {id, name, time, location, duration, description} = meeting;
    return(
        <>
        {meetings.map( (meeting) => (
            <Card body color="dark" outline>
                <Row>
                    <Col>
                    {/* <Card className="meeting" key={meeting.id} color="dark" outline> */}
                        <h3>
                            {meeting.name}:
                        </h3>
                        <Row>
                            <Col><big><b>Time:</b> {meeting.time}</big></Col>
                            <Col><big><b>Location:</b> {meeting.location}</big></Col>
                            <Col><big><b>Duration:</b> {meeting.duration}</big></Col>
                            <Col><big><b>Description:</b> {meeting.description}</big></Col>
                        </Row>
                    {/* </Card> */}
                    </Col>
                </Row>
            </Card>
            ))}
        </>
    );
}

export default Meeting;