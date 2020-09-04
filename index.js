module.exports = {
  parse: function (NIR) {
    function genderIdToLetter (data) {
      switch (data) {
        case '1' :
        case '3' :
          return 'M';
        case '2' :
        case '4' :
          return 'F';
      }
    }

    function isForeigner (data) {
      switch (data) {
        case '1' :
        case '2' :
          return false;
        case '3' :
        case '4' :
          return true;
      }
    }

    function department (data) {
      const departmentTmp = data.splice(0, 2).join('');

      if (departmentTmp === '97') {
        return [departmentTmp, data.splice(0, 1)].join('');
      }

      return departmentTmp;
    }

    function town (data) {
      return data.splice(0, data.length).join('');
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
      yearBirth: yearBirth,
      monthBirth: monthBirth,
      departement: department(placeBirth),
      town: town(placeBirth),
      birthOrder: birthOrder,
      key: key
    };
  }
};
