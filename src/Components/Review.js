import Card from 'react-bootstrap/Card';

function ReviewCard(props) {

    return (
        <Card border="primary" style={{ width: '15em' }}>
            <Card.Header> {props.rating} </Card.Header>
            <Card.Img variant="top" src={require("../icons_assets/greeksalad.jpg")} width={100} />  {props.name}
            <Card.Body>
                <Card.Text> {props.text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

function Review() {
    const details = "Yummy food"
    return (
        <div className="reviewcard">
            <ReviewCard rating="5 Stars" path="../icons_assets/greeksalad.jpg" name="Anisha" text={details} />
            <ReviewCard rating="4.5 Stars" path="../icons_assets/greeksalad.jpg" name="Amaara" text={details} />
            <ReviewCard rating="5 Stars" path="../icons_assets/greeksalad.jpg" name="Rhaya" text={details} />
            <ReviewCard rating="3 Stars" path="../icons_assets/greeksalad.jpg" name="Harsha" text={details} />

        </div>
    );

}

export default Review;