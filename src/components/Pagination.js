import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Pagination({goToNextPage, goToPrevPage}) {
    return (
        <div id="buttonNav">
         <Row >
            <Col>
            { goToPrevPage && <Button variant="danger" id="buttonPrev" onClick= {goToPrevPage}>Previous</Button> }
            </Col>
            <Col>
            { goToNextPage && <Button variant="danger" id="buttonNext" onClick= {goToNextPage}>Next</Button>}
            </Col>
       </Row>
       </div>
    )
}
