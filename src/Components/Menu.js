

import Card from 'react-bootstrap/Card';



function MenuCard(props) {
    
    return (
        <Card border="secondary" style={{ width: '18em' }}>
            <Card.Img variant="top" src={require("../icons_assets/greeksalad.jpg")} width={100} />
            <Card.Body>
                <Card.Title> {props.title} </Card.Title>
                <Card.Text> {props.text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

function Menu() {
    const details = "Our famous healthy authentic Greek salad. Made with freshly grown lettuce, tomatoes, olives, onions and feta cheese all the way from Greece. It's a guest favorite and a must try."
    return (
        <div className="menucard">
            <MenuCard title="Greek Salad" path="../icons_assets/greeksalad.jpg" text={details} />
            <MenuCard title="Bruschetta" path="../icons_assets/greeksalad.jpg" text={details} />
            <MenuCard title="Lemon Cake" path="../icons_assets/greeksalad.jpg" text={details} />
        </div>
    );

}

export default Menu;