import { useEffect, useState } from "react";
import { Container, Row, Button, Form, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { addScore } from "../store/calculationSlice";

import FormCheck from "../Components/FormCheck";
import FormInput from "../Components/FormInput";
import FormSelect from "../Components/FormSelect";

import PartASource from "../source/PartASource";

function Main() {
  const [dob, setDob] = useState(0);
  const [age, setAge] = useState(0);

  const [isOn, setIsOn] = useState({ a: false, b: false });
  const handleInputA = () => {
    setIsOn({ ...isOn, a: !isOn.a });
    console.log(isOn);
  };

  const handleInputB = () => {
    setIsOn({ ...isOn, b: !isOn.b });
  };

  const handleDOB = (e) => {
    setDob(e.target.value);
  };

  const ageCalc = (age) => {
    if (age <= 17 || age >= 45) {
      return 0;
    } else if (age === 44) {
      return 5;
    } else if (age === 43) {
      return 15;
    } else if (age === 42) {
      return 25;
    } else if (age === 41) {
      return 35;
    } else if (age === 40) {
      return 45;
    } else if (age === 39) {
      return 50;
    } else if (age === 38) {
      return 55;
    } else if (age === 37) {
      return 60;
    } else if (age === 36) {
      return 65;
    } else if (age === 35) {
      return 70;
    } else if (age === 34) {
      return 75;
    } else if (age === 33) {
      return 80;
    } else if (age === 32) {
      return 85;
    } else if (age === 18 || age === 31) {
      return 90;
    } else if (age === 19 || age === 30) {
      return 95;
    } else {
      return 100;
    }
  };

  const calculate_age = (dob) => {
    var today = new Date();
    var birthDate = new Date(dob);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    setAge(age_now);
  };

  useEffect(() => {
    calculate_age(dob);
  }, [dob]);

  const [score, setScore] = useState(0);

  const [edu, setEdu] = useState(0);
  const [canadianExp, setCanadianExp] = useState(0);

  const onEdu = (e) => {
    setEdu(e.target.value);
  };

  const oncanadianExp = (e) => {
    setCanadianExp(e.target.value);
  };

  useEffect(() => {
    let ageScore = ageCalc(age);
    let total = Number(ageScore) + Number(edu) + Number(canadianExp);
    setScore(total);
  }, [age,edu, canadianExp]);

  return (
    <Container>
      <h1 style={{ top: "10px", position: "sticky" }}>{score}</h1>
      <Row>
        <Col xs={12} md={12}>
          <h1>Express Entry Calculator</h1>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="birthdate">
              <Col xs={12} md={6}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Please provide your date of birth.
                </Form.Label>
                <Form.Text as="div">DOB: {dob}</Form.Text>
                <Form.Text as="div">AGE: {age}</Form.Text>
              </Col>

              <Col xs={12} md={6}>
                <Form.Control
                  type="date"
                  value={dob}
                  max="2030-12-31"
                  onChange={handleDOB}
                />
              </Col>
            </Form.Group>

            <FormCheck
              id={PartASource.EDU_DATA.id}
              label={PartASource.EDU_DATA.label}
              description={PartASource.EDU_DATA.description}
              option={PartASource.EDU_DATA.option}
              onChange={onEdu}
            />
            <FormSelect
              id={PartASource.LANG_FIRST_TYPE_DATA.id}
              label={PartASource.LANG_FIRST_TYPE_DATA.label}
              description={PartASource.LANG_FIRST_TYPE_DATA.description}
              option={PartASource.LANG_FIRST_TYPE_DATA.option}
            />
            <div id="examPointsForm">
              {PartASource.LANG_TEST_DATA.map((LANG_TEST, i) => (
                <FormInput
                  key={LANG_TEST.id}
                  id={LANG_TEST.id}
                  label={LANG_TEST.label}
                  type="text"
                />
              ))}

              <Form.Group as={Row} className="mb-3" controlId="secondLanguage">
                <Col xs={12} md={6}>
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Did you pass second language exam?
                  </Form.Label>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Check
                    type="switch"
                    id="secondLanguage"
                    onChange={handleInputA}
                  />
                </Col>
              </Form.Group>
            </div>

            <div
              className={`${isOn.a ? "show" : "hide"}`}
              id="secondLanguageForm"
            >
              <FormSelect
                id={PartASource.LANG_FIRST_TYPE_DATA.id}
                label={PartASource.LANG_FIRST_TYPE_DATA.label}
                description={PartASource.LANG_FIRST_TYPE_DATA.description}
                option={PartASource.LANG_FIRST_TYPE_DATA.option}
              />
              {PartASource.LANG_SECOND_TEST_DATA.map((LANG_TEST, i) => (
                <FormInput
                  key={LANG_TEST.id}
                  id={LANG_TEST.id}
                  label={LANG_TEST.label}
                  type="text"
                />
              ))}
            </div>
            <FormSelect
              id={PartASource.CANADIAN_WORK_DATA.id}
              label={PartASource.CANADIAN_WORK_DATA.label}
              description={PartASource.CANADIAN_WORK_DATA.description}
              option={PartASource.CANADIAN_WORK_DATA.option}
              onChange={oncanadianExp}
            />
            <FormSelect
              id={PartASource.FOREIGN_WORK_DATA.id}
              label={PartASource.FOREIGN_WORK_DATA.label}
              description={PartASource.FOREIGN_WORK_DATA.description}
              option={PartASource.FOREIGN_WORK_DATA.option}
            />
            <Form.Group as={Row} className="mb-3" controlId="SecondLanguage">
              <Col xs={12} md={6}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Do you or your spouse or common law partner (who will be
                  included in your application under Express Entry) have brother
                  or sister living in Canada who is a citizen or permanent
                  resident of Canada?
                </Form.Label>
              </Col>
              <Col xs={12} md={6}>
                <Form.Check type="switch" id="canadianFamilyMember" />
              </Col>
            </Form.Group>
            <FormSelect
              id={PartASource.CANADIAN_EDU_DATA.id}
              label={PartASource.CANADIAN_EDU_DATA.label}
              description={PartASource.CANADIAN_EDU_DATA.description}
              option={PartASource.CANADIAN_EDU_DATA.option}
            />
            <FormSelect
              id={PartASource.CANADIAN_JOBOFFER_DATA.id}
              label={PartASource.CANADIAN_JOBOFFER_DATA.label}
              description={PartASource.CANADIAN_JOBOFFER_DATA.description}
              option={PartASource.CANADIAN_JOBOFFER_DATA.option}
            />
            <Form.Group as={Row} className="mb-3" controlId="pnp">
              <Col xs={12} md={6}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Have you got provincial or territorial nomination?
                </Form.Label>
              </Col>
              <Col xs={12} md={6}>
                <Form.Check type="switch" id="pnp" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="withSpouse">
              <Col xs={12} md={6}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Do you have spouse or common - law partner who will be
                  included in your application under Express Entry?
                </Form.Label>
                <Form.Text as="div" muted>
                  <strong>Warning:</strong> If your spouse or common - law
                  partner is citizen or permanent resident of Canada can not be
                  included in your application under Express Entry.
                </Form.Text>
              </Col>
              <Col xs={12} md={6}>
                <Form.Check
                  type="switch"
                  id="withSpouse"
                  onChange={handleInputB}
                />
              </Col>
            </Form.Group>

            <div className={`${isOn.b ? "show" : "hide"}`} id="wtihSpouseForm">
              <FormCheck
                id={PartASource.SPOUSE_EDU_DATA.id}
                label={PartASource.SPOUSE_EDU_DATA.label}
                description={PartASource.SPOUSE_EDU_DATA.description}
                option={PartASource.SPOUSE_EDU_DATA.option}
              />
              <FormSelect
                id={PartASource.SPOUSE_LANG_TYPE_DATA.id}
                label={PartASource.SPOUSE_LANG_TYPE_DATA.label}
                description={PartASource.SPOUSE_LANG_TYPE_DATA.description}
                option={PartASource.SPOUSE_LANG_TYPE_DATA.option}
              />
              <div id="spouseExamPointsForm">
                {PartASource.SPOUSE_LANG_TEST_DATA.map((LANG_TEST, i) => (
                  <FormInput
                    key={LANG_TEST.id}
                    id={LANG_TEST.id}
                    label={LANG_TEST.label}
                    type="text"
                  />
                ))}
              </div>

              <FormSelect
                id={PartASource.SPOUSE_CANADIAN_WORK_DATA.id}
                label={PartASource.SPOUSE_CANADIAN_WORK_DATA.label}
                description={PartASource.SPOUSE_CANADIAN_WORK_DATA.description}
                option={PartASource.SPOUSE_CANADIAN_WORK_DATA.option}
              />
            </div>
            <div className="d-grid gap-2">
              <Button role="submit" variant="primary" size="lg">
                Calculator
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
