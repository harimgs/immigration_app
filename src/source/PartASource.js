const PartASource = {
  EDU_DATA: {
    id: "educationLevel",
    label: "Please select the level of your education.",
    description: [
      "(Choose one of the eight options)",
      `<strong>Warning:</strong>
      If you earned degree, diploma or certificate outside Canada,
      you will need to get an Educational Credential Assessments
        (ECA) for your degree, diploma or certificate from
        designated organizations (ECA report must not be more than
          five years old.).
          <a
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/become-candidate/eligibility/education-assessed.html"
          target="_blank"
          rel="noreferrer"
          >
          Read more
          </a>`,
    ],
    // name: "EducationLevel",
    option: [
      {
        text: "Less than secondary school (high school)",
        value: 0,
      },
      {
        text: "Secondary diploma (high school graduation).",
        value: 30,
      },
      {
        text: "One-year degree, diploma or certificate from a university, college, trade or technical school, or other institute.",
        value: 90,
      },
      {
        text: "Two-year program at a university, college, trade or technical school, or other institute.",
        value: 98,
      },
      {
        text: "Bachelor's degree OR a three or more year program at a university, college, trade or technical school, or other institute.",
        value: 120,
      },
      {
        text: "Two or more certificates, diplomas, or degrees. One must be for a program of three or more years.",
        value: 128,
      },
      {
        text: "Master's degree, OR professional degree needed to practice in a licensed profession (For “professional degree,” the degree program must have been in: medicine, veterinary medicine, dentistry, optometry, law, chiropractic medicine, or pharmacy.)",
        value: 135,
      },
      {
        text: "Doctoral level university degree (Ph.D.)",
        value: 150,
      },
    ],
  },

  LANG_FIRST_TYPE_DATA: {
    id: "typeOfFirstExam",
    label: "What type of exam did you pass?",
    description: [
      `<strong>Warning:</strong>
      You must take an approved language test to be eligible for
      Express Entry!`,
      `Read more about approved language test:
      <a
      href="https://www.ielts.org/"
      target="_blank"
      rel="noreferrer"
      >
      IELTS
      </a>
      ,
      <a
      href="https://www.celpip.ca/"
      target="_blank"
      rel="noreferrer"
      >
      CELPIP
      </a>
      ,
      <a
      href="https://www.lefrancaisdesaffaires.fr/tests-diplomes/test-evaluation-francais-tef/tef-canada/"
      target="_blank"
      rel="noreferrer"
      >
      TEF
      </a>
      ,
      <a
      href="http://www.ciep.fr/tcf-canada"
      target="_blank"
      rel="noreferrer"
      >
      TCF
      </a>
      .`,
      ` Your test results must be less than two years old.
      <a
      href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/become-candidate/eligibility/language-requirements/language-testing.html"
      target="_blank"
      rel="noreferrer"
      >
      Read more
      </a>`,
    ],
    option: [
      {
        text: "none",
        value: 0,
      },
      {
        text: "IELTS - General Training",
        value: 1,
      },
      {
        text: "CELPIP - General Test",
        value: 2,
      },
      {
        text: "TEF Canada",
        value: 3,
      },
      {
        text: "TCF Canada",
        value: 4,
      },
    ],
  },

  LANG_TEST_DATA: [
    {
      id: "speakingPoints",
      label: "How many points did you get for speaking?",
    },
    {
      id: "writingPoints",
      label: "How many points did you get for writing?",
    },
    {
      id: "readingPoints",
      label: "How many points did you get for reading?",
    },
    {
      id: "listeningPoints",
      label: "How many points did you get for listening?",
    },
  ],

  LANG_SECOND_TEST_DATA: [
    {
      id: "speakingPointsSecondLanguage",
      label: "How many points did you get for speaking in second exam?",
    },
    {
      id: "writingPointsSecondLanguage",
      label: "How many points did you get for writing in second exam?",
    },
    {
      id: "readingPointsSecondLanguage",
      label: "How many points did you get for reading in second exam?",
    },
    {
      id: "listeningPointsSecondLanguage",
      label: "How many points did you get for listening in second exam?",
    },
  ],

  CANADIAN_WORK_DATA: {
    id: "canadianExperience",
    label:
      "How many years of skilled work experience do you have in the Canadian labour market in the last ten years?",
    description: [
      `<strong>Warning:</strong>
    To be eligible for Express Entry, your work experience (your occupation) must be classified in the National Occupational Classification
    <a 
    href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/become-candidate/eligibility/find-national-occupation-code.html" 
    target="_blank" 
    rel="noreferrer"
    >
    (NOC)
    </a>.`,
      `Your work experience must also be paid work and classified as Skill Type 0, or Skill Levels A or B.
    <a 
    href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/become-candidate/eligibility/federal-skilled-workers.html" 
    target="_blank" 
    rel="noreferrer"
    >
    Read more
    </a>`,
      `Your work experience is calculated after having completed the full year worked. If you have worked less than a year, choose "none or less than a year". There is no rounding up.
    1 year full time (1,560 hours total) means 30 hours/week for 12 months (full-time work which could be performed for more then one employer) or 15 hours/week for 24 months (part-time work)
    <a 
    href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/become-candidate/eligibility/federal-skilled-workers.html" 
    target="_blank"
    rel="noreferrer"
    >
    Read more
    </a>`,
    ],
    option: [
      {
        text: "none or less than a year",
        value: 0,
      },
      {
        text: "1 year",
        value: 40,
      },
      {
        text: "2 years",
        value: 53,
      },
      {
        text: "3 years",
        value: 64,
      },
      {
        text: "4 years",
        value: 72,
      },
      {
        text: "5 years or more",
        value: 80,
      },
    ],
  },

  FOREIGN_WORK_DATA: {
    id: "experienceOutsideCanada",
    label:
      "How many years of foreign skilled work experiencein (outside Canada) do you have in the last ten years?",
    description: [
      `<strong>Warning:</strong>
      To be eligible for Express Entry, your work experience (your
      occupation) must be classified in the National Occupational
      Classification
      <a
        href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/become-candidate/eligibility/find-national-occupation-code.html"
        target=" _blank"
        rel="noreferrer"
      >
        (NOC)
      </a>.`,
      `Your work experience must also be paid work and classified as
      Skill Type 0, or Skill Levels A or B.
      <a
        href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/become-candidate/eligibility/federal-skilled-workers.html"
        target="_blank"
        rel="noreferrer"
      >
        Read more
      </a>`,
      `Your work experience is calculated after having completed the full
      year worked. If you have worked less than a year, choose "none or
      less than a year". There is no rounding up. 1 year full time (1,560
      hours total) means 30 hours/week for 12 months (full-time work which
      could be performed for more then one employer) or 15 hours/week for
      24 months (part-time work)
      <a
        href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/become-candidate/eligibility/federal-skilled-workers.html"
        target="_blank"
        rel="noreferrer"
      >
        Read more
      </a>`,
    ],
    option: [
      {
        text: "none or less than a year",
        value: 0,
      },
      {
        text: "1 year",
        value: 1,
      },
      {
        text: "2 years",
        value: 2,
      },
      {
        text: "3 years or more",
        value: 3,
      },
    ],
  },

  CANADIAN_EDU_DATA: {
    id: "canadianArrangedEmployment",
    label: "Do you have arranged employment in Canada (valid job offer)?",
    description: [],
    option: [
      {
        text: "No",
        value: 0,
      },
      {
        text: "Secondary (high school) or less",
        value: 1,
      },
      {
        text: "1- or 2- years diploma or certificate",
        value: 2,
      },
      {
        text: "3- years or longer degree, diploma or certificate",
        value: 3,
      },
    ],
  },

  CANADIAN_JOBOFFER_DATA: {
    id: "canadianEducation",
    label: "Have you graduated post-secondary education in Canada?",
    description: [
      `Your valid job offer must be classified in the National
    Occupational Classification (NOC) as Skill Type 0, or Skill Level
    A or B and not be from an embassy, high commission or consulate in
    Canada. It must be also full-time, paid work.
    <a
      href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/become-candidate/eligibility/offer-employment.html"
      target="_blank"
      rel="noreferrer"
    >
      Check
    </a>
    other requirements that the job offer must meet to be valid.`,
      `Your valid job offer must be supported by a Labour Market Impact
    Assessment (LMIA).
    <a
      href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/become-candidate/eligibility/offer-employment/lmia-exempt.html"
      target="_blank"
      rel="noreferrer"
    >
      Check
    </a>
    the exclusions for this requirement.`,
    ],
    option: [
      {
        text: "No",
        value: 0,
      },
      {
        text: "Yes, NOC 00",
        value: 1,
      },
      {
        text: "Yes, any other NOC 0, A or B",
        value: 2,
      },
    ],
  },

  ///////////////////////////////////////////////////////////// spouse


  SPOUSE_EDU_DATA: {
    id: "spouseEducationLevel",
    label: "Please select the level of education of spouse or common-law partner.",
    description: [
      "(Choose one of the eight options)",
      `<strong>Warning:</strong>
      If your spouse or common-law partner earned degree, diploma or certificate outside Canada, it will be needed to get an Educational Credential Assessments(ECA) for your spouse's or common-law partner's degree, diploma or certificate from designated organizations (ECA report must not be more than five years old.).
          <a
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/become-candidate/eligibility/education-assessed.html"
          target="_blank"
          rel="noreferrer"
          >
          Read more
          </a>`,
    ],
    option: [
      {
        text: "Less than secondary school (high school)",
        value: 1,
      },
      {
        text: "Secondary diploma (high school graduation).",
        value: 2,
      },
      {
        text: "One-year degree, diploma or certificate from a university, college, trade or technical school, or other institute.",
        value: 3,
      },
      {
        text: "Two-year program at a university, college, trade or technical school, or other institute.",
        value: 4,
      },
      {
        text: "Bachelor's degree OR a three or more year program at a university, college, trade or technical school, or other institute.",
        value: 5,
      },
      {
        text: "Two or more certificates, diplomas, or degrees. One must be for a program of three or more years.",
        value: 6,
      },
      {
        text: "Master's degree, OR professional degree needed to practice in a licensed profession (For “professional degree,” the degree program must have been in: medicine, veterinary medicine, dentistry, optometry, law, chiropractic medicine, or pharmacy.)",
        value: 7,
      },
      {
        text: "Doctoral level university degree (Ph.D.)",
        value: 8,
      },
    ],
  },

  SPOUSE_LANG_TYPE_DATA: {
    id: "typeOfSpouseExam",
    label: "What type of exam did your spouse or common-law partner pass?",
    description: [
      `<strong>Warning:</strong>
      Your spouse or common-law partner must take an approved language test to be eligible for Express Entry!`,
      `Read more about approved language test:
      <a
      href="https://www.ielts.org/"
      target="_blank"
      rel="noreferrer"
      >
      IELTS
      </a>
      ,
      <a
      href="https://www.celpip.ca/"
      target="_blank"
      rel="noreferrer"
      >
      CELPIP
      </a>
      ,
      <a
      href="https://www.lefrancaisdesaffaires.fr/tests-diplomes/test-evaluation-francais-tef/tef-canada/"
      target="_blank"
      rel="noreferrer"
      >
      TEF
      </a>
      ,
      <a
      href="http://www.ciep.fr/tcf-canada"
      target="_blank"
      rel="noreferrer"
      >
      TCF
      </a>
      .`,
      `Your spouse's or common-law partner's test results must be less than two years old.
      <a
      href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/become-candidate/eligibility/language-requirements/language-testing.html"
      target="_blank"
      rel="noreferrer"
      >
      Read more
      </a>`,
    ],
    option: [
      {
        text: "none",
        value: 0,
      },
      {
        text: "IELTS - General Training",
        value: 1,
      },
      {
        text: "CELPIP - General Test",
        value: 2,
      },
      {
        text: "TEF Canada",
        value: 3,
      },
      {
        text: "TCF Canada",
        value: 4,
      },
    ],
  },

  SPOUSE_LANG_TEST_DATA: [
    {
      id: "spouseSpeakingPoints",
      label: "How many points did your spouse or common-law partner get for speaking?",
    },
    {
      id: "spouseWritingPoints",
      label: "How many points did your spouse or common-law partner get for writing?",
    },
    {
      id: "spouseReadingPoints",
      label: "How many points did your spouse or common-law partner get for reading?",
    },
    {
      id: "spouseListeningPoints",
      label: "How many points did your spouse or common-law partner get for listening?",
    },
  ],

  SPOUSE_CANADIAN_WORK_DATA: {
    id: "spouseCanadianExperience",
    label:
      "How many years of skilled work experience in the Canadian labour market has your spouse or common-law partner in the last ten years?",
    description: [
      `<strong>Warning:</strong>
      To be eligible for Express Entry, your spouse's or common-law partner's work experience (occupation) must be classified in the National Occupational Classification
    <a 
    href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/become-candidate/eligibility/find-national-occupation-code.html" 
    target="_blank" 
    rel="noreferrer"
    >
    (NOC)
    </a>.`,
      `Your spouse's or common-law partner's work experience must also be paid work and classified as Skill Type 0, or Skill Levels A or B..
    <a 
    href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/become-candidate/eligibility/federal-skilled-workers.html" 
    target="_blank" 
    rel="noreferrer"
    >
    Read more
    </a>`,
      `Your spouse's or common-law partner's work experience is calculated after having completed the full year worked. If you have worked less than a year, choose "none or less than a year". There is no rounding up.
    1 year full time (1,560 hours total) means 30 hours/week for 12 months (full-time work which could be performed for more then one employer) or 15 hours/week for 24 months (part-time work)
    <a 
    href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/become-candidate/eligibility/federal-skilled-workers.html" 
    target="_blank"
    rel="noreferrer"
    >
    Read more
    </a>`,
    ],
    option: [
      {
        text: "none or less than a year",
        value: 0,
      },
      {
        text: "1 year",
        value: 1,
      },
      {
        text: "2 years",
        value: 2,
      },
      {
        text: "3 years",
        value: 3,
      },
      {
        text: "4 years",
        value: 4,
      },
      {
        text: "5 years or more",
        value: 5,
      },
    ],
  },

  //   AGE_DATA: [
  //     { key: "20", text: "17 years of age or less", value: "0" }, //0
  //     { key: "21", text: "18 years of age", value: 99 }, //99
  //     { key: "22", text: "19 years of age", value: 105 }, //105
  //     { text: "20 to 29 years of age", value: 110 },
  //     { text: "30 years of age", value: 105 },
  //     { text: "31 years of age", value: 99 },
  //     { text: "32 years of age", value: 94 },
  //     { text: "33 years of age", value: 88 },
  //     { text: "34 years of age", value: 83 },
  //     { text: "35 years of age", value: 77 },
  //     { text: "36 years of age", value: 72 },
  //     { text: "37 years of age", value: 66 },
  //     { text: "38 years of age", value: 61 },
  //     { text: "39 years of age", value: 55 },
  //     { text: "40 years of age", value: 50 },
  //     { text: "41 years of age", value: 39 },
  //     { text: "42 years of age", value: 28 },
  //     { text: "43 years of age", value: 17 },
  //     { text: "44 years of age", value: 6 },
  //     { text: "45 years of age or more", value: "0" },
  //   ],

  //   LANG_FIRST_DATA: [
  //     { text: "Less than CLB 4", value: "0" },
  //     { text: "Less than CLB 4 or 5", value: 6 },
  //     { text: "Less than CLB 6", value: 8 },
  //     { text: "Less than CLB 7", value: 16 },
  //     { text: "Less than CLB 8", value: 22 },
  //     { text: "Less than CLB 9", value: 29 },
  //     { text: "Less than CLB 10 or more", value: 32 },
  //   ],

  //   LANG_SECOND_DATA: [
  //     { text: "Less than CLB 4", value: "0" },
  //     { text: "Less than CLB 5 or 6", value: 1 },
  //     { text: "Less than CLB 7 or 8", value: 3 },
  //     { text: "Less than CLB 9 or more", value: 6 },
  //   ],

  //   CANADIAN_WORK_DATA: [
  //     { text: "None or less than a year", value: "0" },
  //     { text: "1 year", value: 40 },
  //     { text: "2 year", value: 53 },
  //     { text: "3 year", value: 64 },
  //     { text: "4 year", value: 72 },
  //     { text: "5 year", value: 80 },
  //   ],
};

export default PartASource;
