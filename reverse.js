var input = process.argv[2];
if (input) {
  console.log(reverse(input));
}  


function reverse(output) {
  return output.split('').reverse().join('');
}
