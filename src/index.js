// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
class Calculator {}
Calculator.main = (args) => {
  let total_stacked = 138000000;
  let edi_biweekly = 3333333;
  let stacked_edi = 0;
  let percentage = 0;
  let rewards_15days = 0;
  System.out.println('Calculator Stacking Rewards for EPOCH 0 \n');
  System.out.println('Introduce the ammount which you stacked');
  let scanObject = new Scanner(System.in);
  stacked_edi = scanObject.nextInt();
  percentage = (stacked_edi / total_stacked);
  rewards_15days = (edi_biweekly * percentage);
  System.out.println('The rewards every 15 days is ' + rewards_15days);
};

