function usePercent(arr) {
  const calcPercent = (numb) => {
    if (numb > 0) {
      const percent = (100 / arr.length) * numb;
      return Math.round(percent * 10) / 10;
    }
    return 0;
  };
  let countFive = 0;
  let countFour = 0;
  let countThree = 0;
  let countTwo = 0;
  let countOne = 0;
  arr.forEach((item) => {
    switch (item.star) {
      case 5:
        countFive += 1;
        break;
      case 4:
        countFour += 1;
        break;
      case 3:
        countThree += 1;
        break;
      case 2:
        countTwo += 1;
        break;
      default:
        countOne += 1;
    }
  });

  return [
    {
      name: "five",
      percent: calcPercent(countFive),
      number: countFive,
    },
    {
      name: "four",
      percent: calcPercent(countFour),
      number: countFour,
    },
    {
      name: "three",
      percent: calcPercent(countThree),
      number: countThree,
    },
    {
      name: "two",
      percent: calcPercent(countTwo),
      number: countTwo,
    },
    {
      name: "one",
      percent: calcPercent(countOne),
      number: countOne,
    },
  ];
}

export default usePercent;
