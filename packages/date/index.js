module.exports = () => {
  console.log("hello from common 12");

  let datetime = new Date();
  // current date
  // adjust 0 before single digit date
  let date = ("0" + datetime.getDate()).slice(-2);
  // current month
  let month = ("0" + (datetime.getMonth() + 1)).slice(-2);
  // current year
  let year = datetime.getFullYear();
  console.log(year + "-" + month + "-" + date);

};
