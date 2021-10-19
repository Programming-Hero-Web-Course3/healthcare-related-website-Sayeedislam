import Button from "@restart/ui/esm/Button";
import { Card } from "react-bootstrap";


const HomeServices = (props) => {
    const { img, name, des } = props.img;
    return (
        <div>
            <Card >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {des}
                    </Card.Text>
                    <Button className="btn btn-primary">Click for details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeServices;