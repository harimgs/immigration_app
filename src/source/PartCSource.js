const PartCSource = {

  EDU_DATA: [
    {
      text: 'Secondary school (high school) credential or less',
      value: '0',
      value2: '0'
    },
    {
      text: 'Post-secondary program credential of one year or longer',
      value: 13,
      value2: 25
    },
    {
      text:
        'Two or more post-secondary program credentials AND at least one of these credentials was issued on completion of a post-secondary program of three years or longer',
      value: 25,
      value2: 50
    }
  ],

  FWE_DATA: [
    { text: 'No foreign work experience', value: '0', value2: '0' },
    {
      text: '1 or 2 years of foreign work experience',
      value: 13,
      value2: 25
    },
    {
      text: '3 years or more of foreign work experience',
      value: 25,
      value2: 50
    }
  ],

  COQ_DATA: [
    { text: 'With a certificate of qualification', value: 25, value2: 50 }
  ]
};
export default PartCSource;
