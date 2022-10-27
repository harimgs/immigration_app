import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <>
      <Col md={4}>
        <Link to={`/detail/${props.i}`}>
        <img
          alt={props.shoes.title}
          width="80%"
          src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        />
        </Link>
        <h5>{props.shoes.title}</h5>
        <span>{props.shoes.price}</span>
      </Col>
    </>
  );
}

export default Card;
