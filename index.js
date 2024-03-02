const usrInput = document.querySelector(".inpt");
const upperCase = document.querySelector(".uppercase");
const lowerCase = document.querySelector("#lowercase");
const camelCase = document.querySelector("#camelcase");
const kebabCase = document.querySelector("#kebabcase");
const trimCase = document.querySelector("#trimcase");

function camelConversion(str) {
//   if (str == "") return;
  const string = str.toLowerCase();
  const splitArr = string.split(" ");
  // console.log(splitArr);

  const sortedValue = splitArr
    .map((val, i) => {
      if (i === 0) return val;
      if (!val) return val;
      const camelValue = val[0].toUpperCase() + val.slice(1, val.length);
      return camelValue;
    })
    .join("");
  console.log(sortedValue);
  camelCase.innerHTML = sortedValue;
}

function kebabConversion(str) {
  const splitArr = str.split(" ");
  kebabCase.innerHTML = splitArr.join("-");
}

usrInput.addEventListener("input", () => {
  const userVal = usrInput.value;
  upperCase.innerHTML = usrInput.value.trim().toUpperCase();
  lowerCase.innerHTML = usrInput.value.trim().toLowerCase();
  camelConversion(userVal.trim());
  kebabConversion(userVal.trim());
  trimCase.innerHTML = userVal.trim().replaceAll(" ", "");
});
