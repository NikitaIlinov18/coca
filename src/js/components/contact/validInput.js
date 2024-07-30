export const useValidInput = () => {
  const form = document.querySelector('.get-started__form'),
    formInputs = document.querySelectorAll('.get-started__form-input'),
    inputEmail = document.querySelector('.get-started__form-input-email'),
    inputPhone = document.querySelector('.get-started__form-input-phone');

  function validateEmail(email) {
    const re =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return re.test(String(email).toLowerCase());
  }

  form.onsubmit = function () {
    const emailVal = inputEmail.value,
      phoneVal = inputPhone.value,
      emptyInputs = Array.from(formInputs).filter(
        (input) => input.value === '',
      );

    formInputs.forEach(function (input) {
      if (input.value === '') {
        input.classList.add('valid-error');
      } else {
        input.classList.remove('valid-error');
      }
    });

    if (emptyInputs.length !== 0) {
      console.log('inputs not filled');
      return false;
    }

    if (!validateEmail(emailVal)) {
      console.log('email not valid');
      inputEmail.classList.add('valid-error');
      return false;
    } else {
      inputEmail.classList.remove('valid-error');
    }
  };
};
