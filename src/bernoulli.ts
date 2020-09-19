/**
  * The simplified form of Bernoulli's equation.
  * Part of Ada Lovelace's algorithm research
  *
  * Copyright (C) 2020, Anderson Costa
  */
export class Bernoulli {

  calculate(n: number): Array<number> {
    // Define fraction variables
    let numerator: any = [];
    let denominator: any = [];

    for (let i = 0; i <= n; ++i) {
      // Defines the fraction value
      numerator[i] = 1;
      denominator[i] = (i + 1);

      for (let j = i; j >= 1; --j) {
        // The form is: A[j-1] = j * (A[j-1] - A[j])
        numerator[j - 1] *= denominator[j];
        numerator[j] *= denominator[j - 1];

        // Changes as fractions to have the same denominator
        denominator[j] = denominator[j - 1] * denominator[j];
        denominator[j - 1] = denominator[j];

        // Subtract the numerator
        numerator[j - 1] = numerator[j - 1] - numerator[j];

        // Apply multiplication
        numerator[j - 1] *= j;

        // Simplifies the fraction
        const reduced = this.reduce(numerator[j - 1], denominator[j - 1]);

        // Returns the reduced numerator and demonimator
        numerator[j - 1] = reduced[0];
        denominator[j - 1] = reduced[1];
      }
    }

    // Returns the simplified number
    return [numerator[0], denominator[0]];
  }

  /**
   * Reduce a fraction to lowest terms.
   */
  reduce(numerator: number, denominator: number): Array<number> {
    // Find the GCD of numerator and denominator
    const rgcd = this.gcd(numerator, denominator);

    return [
      // Then divide both the numerator and denominator by the GCD
      numerator / rgcd, denominator / rgcd
    ];
  }

  /**
   * Return Greatest common divisor of two numbers.
   */
  gcd(a: number, b: number): number {
    return b ? this.gcd(b, a % b) : a;
  }
}
