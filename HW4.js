//Code written by 325228781 מוחמד קעדאו 323932624 ו פיראס נגאר

const fs = require("fs");

function getOutPut(i, sentences) {
  /**
   * @input1 index of txt file
   * @input2 array of lines of the text file
   *
   * @output string that contains 'i' lines if the text file has 'i' lines
   * @output string that contains all of the lines of the text file if it has less than 'i' lines
   */
  let output1 = "";

  if (sentences.length < i)
    //goes through the array of lines to concat all lines into output1 
    for (sentence of sentences) {
      output1 += `${sentence} \n`;
    }
    
//goes through the array of lines to concat "i" lines into output1 

  else for (let j = 0; j < i; j++) output1 += `${sentences[j]} \n`;

  return output1;
}

function GoThroughFiles() {
  /**
   * Function that goes through all of the text files and returns a string containing 'n' sentences from each
   * text file
   */

  let output2 = "";

  //gets content of text files and splits them into an array according to new line separation
  for (let i = 1; i <= 10; i++) {
    let text = fs.readFileSync(`textfiles/${i}.txt`, "utf-8");
    let arr = text.split("\r\n");

    output2 += getOutPut(i, arr);

    output2 += `\n`;
  }

  return output2;
}

fs.writeFileSync(`${__dirname}/textfiles/output.txt`, GoThroughFiles());
