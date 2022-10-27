import { Row, Form, Col } from "react-bootstrap";
import DOMPurify from "dompurify";

// props = {id, label, description, option ={}}

function FormCheck(props) {
  const sanitizer = DOMPurify.sanitize;
  DOMPurify.addHook('afterSanitizeAttributes', function (node) {
    // set all elements owning target to target=_blank
    if ('target' in node) {
      node.setAttribute('target', '_blank');
      node.setAttribute('rel', 'noopener noreferrer');
    }
  });
  return (
    <fieldset>
      <Form.Group as={Row} className="mb-3" controlId={props.id}>
        <Col xs={12} md={6}>
          <Form.Label style={{ fontWeight: "bold" }}>{props.label}</Form.Label>
          {props.description && props.description.map((description, i) => (
            <Form.Text
              as="div"
              dangerouslySetInnerHTML={{ __html: sanitizer(description) }}
              key={description}
              muted
              // style={{ display: "block" }}
            ></Form.Text>
          ))}
        </Col>
        <Col xs={12} md={6}>
          {props.option.map((option, i) => (
            <Form.Check
              key={i}
              id={props.id + option.value}
              type="radio"
              label={option.text}
              name={props.id}
              value={option.value}
              onChange={props.onChange}
            />
          ))}
        </Col>
      </Form.Group>
    </fieldset>
  );
}

export default FormCheck;
