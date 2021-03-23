const wordLength = (string) => {
    let maxWord = "";
    string.split(" ").forEach((element) => {
      if (element.length > maxWord.length) maxWord = element;
    });
    return maxWord;
  };