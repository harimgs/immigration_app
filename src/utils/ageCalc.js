export function ageCalc(age) {
  if (age <= 17 || age >= 45 || !age) {
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
}

export function calculate_age(dob) {
  let today = new Date();
  let birthDate = new Date(dob);
  let age_now = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age_now--;
  }
  return age_now
};
