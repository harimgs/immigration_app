import { Row, Form, Col } from "react-bootstrap";
import DOMPurify from "dompurify";

// props = {id, label, description, option ={}}

function FormInput(props) {
  const sanitizer = DOMPurify.sanitize;
  DOMPurify.addHook('afterSanitizeAttributes', function (node) {
    // set all elements owning target to target=_blank
    if ('target' in node) {
      node.setAttribute('target', '_blank');
      node.setAttribute('rel', 'noopener noreferrer');
    }
  });
  return (
      <Form.Group as={Row} className="mb-3">
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
        <Col xs={12} md={2}>
          <Form.Control
            type={props.type}
            id={props.id}
            name={props.id}
            value={props.value}
            onChange={props.onChange}
          />
        </Col>
      </Form.Group>
  );
}

export default FormInput;
