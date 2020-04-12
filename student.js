function createstudent(sName, sAge, sHappyBD, sRating) {
  let student = {
    name: sName,
    age: sAge,
    happyBD: sHappyBD,
    rating: sRating,
    birthYear() {
      let today = new Date();
      let bY = today.getFullYear() - this.age - 1;
      if (sHappyBD) {
        bY = bY + 1;
      }
      return bY;
    },
    leapYear() {
      let leapY = 0;
      let bY = student.birthYear();
      if (bY % 4 == 0) {
        leapY = leapY + 1;
      }
      return leapY;
    },
    predictedPoints() {
      let cP = this.rating;
      let mP = 100;
      let leapY = student.leapYear();
      let pP = (cP / mCP) * mP - 3 * leapY;
      return pP;
    },
    finalGrade() {
      let fS = 2;
      let pP = student.predictedPoints();
      if (pP >= 85) {
        fS = 5;
      } else if (pP >= 60 && pP < 85) {
        fS = 4;
      } else if (pP >= 40 && pP < 60) {
        fS = 3;
      }
      return fS;
    }
  }
  return student;
}
let mCP = prompt("Какое текущее максимальное количество баллов за семестр?");
do {
  let student = createstudent(prompt("Как вас зовут?"), prompt("Введите ваш возраст"),
    confirm("Отмечали ли вы день рождения в этом году?"),
    prompt("Введите ваш текущий рейтинг"));
  console.log("Имя студента: " + student.name + ".");
  console.log("Возраст студента: " + student.age + ".");
  console.log("Текущий рейтинг студента: " + student.rating + ".");
  console.log("Год рождения студента: " + student.birthYear() + ".");
  console.log("Возмодный финальный рейтинг: " + student.predictedPoints() + ".");
  console.log("Предполагаемая итоговая оценка: " + student.finalGrade() + ".");
      }
      while (confirm("Хотите продолжить?") === true);

      var students = [createstudent];
