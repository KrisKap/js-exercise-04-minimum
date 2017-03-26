function minimum(number_1, number_2) {

  if (number_1 < number_2) {
    alert(number_1 + " jest mniejszą liczbą spośród liczb " + number_1 + " oraz " + number_2);
  }
  else if (number_1 > number_2) {
    alert(number_2 + " jest mniejszą liczbą spośród liczb " + number_1 + " oraz " + number_2);
  }
  else alert("Obie liczby " + number_1 + " oraz " + number_2 + " są sobie równe")
}

minimum(5,5);