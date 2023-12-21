export function parse(NIR) {
  function genderIdToLetter(id) {
    switch (id) {
      case '1':
      case '3':
        return 'M';
      case '2':
      case '4':
        return 'F';
    }
  }

  function isForeigner(flag) {
    switch (flag) {
      case '1':
      case '2':
        return false;
      case '3':
      case '4':
        return true;
    }
  }

  function department(code) {
    const departmentTmp = code.splice(0, 2).join('');

    if (departmentTmp === '97') {
      return [departmentTmp, code.splice(0, 1)].join('');
    }

    return departmentTmp;
  }

  function town(code) {
    return code.splice(0, code.length).join('');
  }

  const exploitedNir = NIR.toString().split('');

  const gender = exploitedNir.splice(0, 1)[0];
  const yearBirth = exploitedNir.splice(0, 2).join('');
  const monthBirth = exploitedNir.splice(0, 2).join('');
  const placeBirth = exploitedNir.splice(0, 5);
  const birthOrder = exploitedNir.splice(0, 3).join('');
  const key = exploitedNir.splice(0, 2).join('');

  return {
    gender: genderIdToLetter(gender),
    foreigner: isForeigner(gender),
    yearBirth,
    monthBirth,
    departement: department(placeBirth),
    town: town(placeBirth),
    birthOrder,
    key,
  };
}
