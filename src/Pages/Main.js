import { useRef, useEffect, useState } from "react";
import { Container, Row, Button, Form, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { addScore } from "../store/calculationSlice";

import { calcIELTStoCLB } from "../utils/ieltsPointsCalculation";
import { ageCalc, calculate_age } from "../utils/ageCalc";

import FormCheck from "../Components/FormCheck";
import FormInput from "../Components/FormInput";
import FormSelect from "../Components/FormSelect";

import PartASource from "../source/PartASource";

function Main() {
  const firstLangType = useRef(null);

  const [dob, setDob] = useState("");
  const [age, setAge] = useState(0);
  const [defaultValue, setDefaultValue] = useState({
    firstLang: 0,
    secondLangSwitch: false,
    secondLang: 0,
    withSpouseSwitch: 0,
  });

  const [isOn, setIsOn] = useState({
    firstLang: false,
    secondLangSwitch: false,
    secondLang: false,
    withSpouseSwitch: false,
  });

  const handleFirstLang = (e) => {
    // first language select box
    if (e.target.value == 0) {
      setIsOn({
        ...isOn,
        firstLang: false,
        secondLangSwitch: false,
        secondLang: false,
      });
      setDefaultValue({ ...defaultValue, secondLangSwitch: false });
    } else {
      setIsOn({ ...isOn, firstLang: true });
    }
  };

  const handleSecondLangSwitch = () => {
    // second language switch
    setIsOn({ ...isOn, secondLangSwitch: !isOn.secondLangSwitch });
    setDefaultValue({
      ...defaultValue,
      secondLangSwitch: 0,
    });
  };

  const handleSecondLang = (e) => {
    // second language select box
    if (e.target.value == 0) {
      setIsOn({ ...isOn, secondLang: false });
      setDefaultValue({
        ...defaultValue,
        secondLang: !defaultValue.secondLang,
      });
    } else {
      setIsOn({ ...isOn, secondLang: true });
    }
  };

  const handleWithSpouseSwitch = () => {
    // spouse select box
    setIsOn({ ...isOn, withSpouseSwitch: !isOn.withSpouseSwitch });
  };

  const handleDOB = (e) => {
    setDob(e.target.value);
  };

  useEffect(() => {
    let age = calculate_age(dob);
    setAge(age);
  }, [dob]);

  const [score, setScore] = useState(0);

  const [edu, setEdu] = useState(0);
  const [canadianExp, setCanadianExp] = useState(0);

  const [firstTestScore, setFirstTestScore] = useState({
    speakingPoints: 0,
    writingPoints: 0,
    readingPoints: 0,
    listeningPoints: 0,
  });

  const [firstTestCLB, setFirstTestCLB] = useState({
    speakingPoints: 0,
    writingPoints: 0,
    readingPoints: 0,
    listeningPoints: 0,
  });

  /// need to fix delay using useEffect
  const firstLangCalc = (testscore, type) => {
    if (firstLangType.current.value == 1) {
      let score = calcIELTStoCLB(testscore, type);

      setFirstTestCLB({
        ...firstTestCLB,
        [type]: score,
      });
    }
  };

  // useEffect(() => {
  //   setFirstTestCLB({...firstTestCLB})
  // }, [firstTestScore]);

  const onEdu = (e) => {
    setEdu(e.target.value);
  };

  const oncanadianExp = (e) => {
    setCanadianExp(e.target.value);
  };

  useEffect(() => {
    const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);
    let clb = sumValues(firstTestCLB);
    let ageScore = ageCalc(age);
    let total =
      Number(ageScore) + Number(edu) + Number(canadianExp) + Number(clb);

    setScore(total);
  }, [age, edu, canadianExp, firstTestCLB]);

  return (
    <Container>
      <h2 style={{ top: "10px", position: "sticky" }}>
        Score:{score} - DOB: {ageCalc(age)} - Edu: {edu} - CanExp :{" "}
        {canadianExp} <br />
        {firstTestScore.listeningPoints}
        <br />
        speaking: {firstTestCLB.speakingPoints} writing:{" "}
        {firstTestCLB.writingPoints} reading: {firstTestCLB.readingPoints}{" "}
        listening: {firstTestCLB.listeningPoints}{" "}
      </h2>
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
              onChange={handleFirstLang}
              ref={firstLangType}
            />
            <div
              className={`${isOn.firstLang ? "show" : "hide"}`}
              id="examPointsForm"
            >
              {PartASource.LANG_TEST_DATA.map((LANG_TEST, i) => (
                <FormInput
                  key={LANG_TEST.id}
                  id={LANG_TEST.id}
                  label={LANG_TEST.label}
                  type="text"
                  value={firstTestScore[LANG_TEST.id]}
                  onChange={(e) => {
                    firstLangCalc(firstTestScore[LANG_TEST.id], LANG_TEST.id);
                    setFirstTestScore({
                      ...firstTestScore,
                      [LANG_TEST.id]: e.target.value,
                    });
                  }}
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
                    onChange={handleSecondLangSwitch}
                    checked={defaultValue.secondLangSwitch}
                  />
                </Col>
              </Form.Group>
            </div>

            <div
              className={`${isOn.secondLangSwitch ? "show" : "hide"}`}
              id="secondLanguageForm"
            >
              <FormSelect
                id={PartASource.LANG_FIRST_TYPE_DATA.id}
                label={PartASource.LANG_FIRST_TYPE_DATA.label}
                description={PartASource.LANG_FIRST_TYPE_DATA.description}
                option={PartASource.LANG_FIRST_TYPE_DATA.option}
                onChange={handleSecondLang}
              />
              <div className={`${isOn.secondLang ? "show" : "hide"}`}>
                {PartASource.LANG_SECOND_TEST_DATA.map((LANG_TEST, i) => (
                  <FormInput
                    key={LANG_TEST.id}
                    id={LANG_TEST.id}
                    label={LANG_TEST.label}
                    type="text"
                  />
                ))}
              </div>
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
                  onChange={handleWithSpouseSwitch}
                />
              </Col>
            </Form.Group>

            <div
              className={`${isOn.withSpouseSwitch ? "show" : "hide"}`}
              id="wtihSpouseForm"
            >
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
