export default function changePhoneNumber(number) {
  const phoneNumber = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/i;

  if (phoneNumber.test(number)) {
    const changeNumber = number.replace(/[- _():=]/g, '');
    let code = changeNumber.substring(0, 1);
    let newNumber = '';
    if (code === '8') {
      code = code.replace('8', '+7');
      newNumber = code + changeNumber.substring(1);
    } else if (code === '+') {
      newNumber = changeNumber;
    }

    return newNumber;
  }
  throw new Error('Неверно введен номер');
}
