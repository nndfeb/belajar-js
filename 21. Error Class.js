/**
 * Error Class
 */

class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathUntil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError(
        "Total parameter harus lebih dari 0",
        "numbers"
      );
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

try {
  // const initEKo = MathUntil.sum(1, 2);
  // console.log(initEKo);
  const initEKo = MathUntil.sum();
  console.log(initEKo);
  console.log("Eko"); // jika terjadi error blok bawahnya tidak akan dijalankan langsung loncat ke catch
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(
      `Terjadi error di fields ${error.field} dengan ${error.message}`
    );
  } else {
    console.log(`Terjadi error : ${error.message}`);
  }
} finally {
  console.log("finaly Bro!");
}
console.log("Khenedy");
