import { Row, Form, Col, ToggleButton } from "react-bootstrap";

function FormSwitch(props) {
  return (
    <Form.Group as={Row} className="mb-3" controlId={props.id}>
      <Col xs={12} md={6}>
        <Form.Label style={{ fontWeight: "bold" }}>{props.label}</Form.Label>
        {props.description &&
          props.description.map((description, i) => (
            <Form.Text
              as="div"
              // dangerouslySetInnerHTML={{ __html: sanitizer(description) }}
              key={description}
              muted
              // style={{ display: "block" }}
            ></Form.Text>
          ))}
      </Col>
      <Col xs={12} md={6}>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Check this switch"
          />
      </Col>
    </Form.Group>
  );
}

export default FormSwitch;
