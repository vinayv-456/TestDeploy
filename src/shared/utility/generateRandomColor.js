/* eslint-disable no-plusplus */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
export const generateRandomColor = () => {
  // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // return `#${randomColor}`;
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
