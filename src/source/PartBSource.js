const PartBSource = {
  EDUCATION_HEADER: [
    'Spouse’s or common-law partner’s level of education',
    'With a spouse or common-law partner'
  ],

  FOL_HEADER: [
    'Canadian Language Benchmark (CLB) level per ability',
    'With a spouse or common-law partner'
  ],

  EXP_HEADER: [
    'Spouses Canadian work experience',
    'With a spouse or common-law partner'
  ],

  EDU_DATA: [
    { text: 'Less than secondary school (high school)', value: '0' },
    { text: 'Secondary diploma (high school graduation)', value: 2 },
    {
      text:
        'One-year degree, diploma or certificate from  a university, college, trade or technical school, or other institute',
      value: 6
    },
    {
      text:
        'Two-year program at a university, college, trade or technical school, or other institute',
      value: 7
    },
    {
      text:
        "Bachelor's degree OR  a three or more year program at a university, college, trade or technical school, or other institute",
      value: 8
    },
    {
      text:
        'Two or more certificates, diplomas, or degrees. One must be for a program of three or more years',
      value: 9
    },
    {
      text:
        "Master's degree, or professional degree needed to practice in a licensed profession (For “professional degree”, the degree program must have been in: medicine, veterinary medicine, dentistry, optometry, law, chiropractic medicine, or pharmacy.)",
      value: 10
    },
    { text: 'Doctoral level university degree (PhD)', value: 10 }
  ],

  FOL_DATA: [
    { text: 'CLB 4 or less', value: '0' },
    { text: 'CLB 5 or 6', value: 1 },
    { text: 'CLB 7 or 8', value: 3 },
    { text: 'CLB 9 or more', value: 5 }
  ],

  EXP_DATA: [
    { text: 'None or less than a year', value: '0' },
    { text: '1 year', value: 5 },
    { text: '2 year', value: 7 },
    { text: '3 year', value: 8 },
    { text: '4 year', value: 9 },
    { text: '5 years or more', value: 10 }
  ]
};

export default PartBSource;
