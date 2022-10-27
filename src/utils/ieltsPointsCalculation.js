export function calcIELTStoCLB(testscore, type) {
  if (type === "speakingPoints" || type === "writingPoints") {
    if (testscore >= 7.5) {
      return 10;
    } else if (testscore == 7.0) {
      return 9;
    } else if (testscore == 6.5) {
      return 8;
    } else if (testscore == 6) {
      return 7;
    } else if (testscore == 5.5) {
      return 6;
    } else if (testscore == 5) {
      return 5;
    } else if (testscore < 5 && testscore >= 4) {
      return 4;
    } else {
      return 0;
    }
  } else if (type === "readingPoints") {
    if (testscore >= 8) {
      return 10;
    } else if (testscore >= 7 && testscore < 8) {
      return 9;
    } else if (testscore == 6.5) {
      return 8;
    } else if (testscore == 6) {
      return 7;
    } else if (testscore >= 5 && testscore < 6) {
      return 6;
    } else if (testscore >= 4 && testscore < 5) {
      return 5;
    } else if (testscore == 3.5) {
      return 4;
    } else {
      return 0;
    }
  } else {
    if (testscore >= 8.5) {
      return 10;
    } else if (testscore == 8) {
      return 9;
    } else if (testscore == 7.5) {
      return 8;
    } else if (testscore >= 6 && testscore < 7.5) {
      return 7;
    } else if (testscore == 5.5) {
      return 6;
    } else if (testscore == 5) {
      return 5;
    } else if (testscore == 4.5) {
      return 4;
    } else {
      return 0;
    }
  }
};
