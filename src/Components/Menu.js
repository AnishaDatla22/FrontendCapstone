

import Card from 'react-bootstrap/Card';



function MenuCard(props) {
    
    return (
        <div className="card">
            <Card style={{ width: '18em' }}>
                <Card.Img className="cardimg" variant="top" src={props.path} alt={props.title}/>
                <Card.Body>
                    <Card.Title><b> {props.title}</b> </Card.Title>
                    <Card.Text> {props.text}</Card.Text>
                    <Card.Text><b> Order Online</b> </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
}

function Menu() {
    
    const menuItems = [
        {
            title: "Greek Salad",
            path: () => require("../icons_assets/greeksalad.jpg"),
            text: "Our famous healthy authentic Greek salad. Made with freshly grown lettuce, tomatoes, olives, onions and feta cheese all the way from Greece. It's a guest favorite and a must try.",
        },
        {
            title: "Bruschetta",
            path: () => require("../icons_assets/bruschetta.jpg"),
            text: "Our famous healthy authentic Greek salad. Made with freshly grown lettuce, tomatoes, olives, onions and feta cheese all the way from Greece. It's a guest favorite and a must try.",
        },
        {
            title: "Lemon Cake",
            path: () => require("../icons_assets/lemon dessert.jpg"),
            text: "Our famous healthy authentic Greek salad. Made with freshly grown lettuce, tomatoes, olives, onions and feta cheese all the way from Greece. It's a guest favorite and a must try.",
        },


    ]
    const items = menuItems.map((items) => (
        <MenuCard title={items.title} path={items.path()} text={items.text} />
    ));

    return (
        <div className="menucard">
            {items}
        </div>
    );

}

export default Menu;