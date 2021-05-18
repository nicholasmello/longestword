# Longest English Word
In Tom Scott's video <a href="https://www.youtube.com/watch?v=zp4BMR88260">"What's The Longest Word You Can Write With Seven-Segment Displays?"</a> he made the nodejs code for finding the longest word in the English language. He challenged us to create a version that displays all words if multiple have the same length. 
## My specific regex
There was debate in the comments about what letters should and should not be allowed. Many comments said S should not be included because it looks like the number 5 when displayed on a seven segment display. I removed s and got the word 'three-and-a-halfpenny'. I personally found it unsatisfying to have dashes because while possible to display it doesn't feel like a single word so I took those out too and got 3 words: 'hyperbrachycephaly', 'phenylacetaldehyde', and 'ultrabrachycephaly'. I then saw another comment and agreed o should be allowed because a lower case o does not look like a 0 on a seven segment display so I put it back in and got 'polytetrafluoroethylene'. Feel free to play around with it and change those letters to whatever you want!
## Wordlist
I got the wordlist from <a href="https://github.com/dwyl/english-words">dwyl/english-words</a>
## Useage
This project is running with nodejs so make sure that is installed first. Add the wordlist to the directory with the code and run `npm run start` to get your list of words. Adjust the regex in index.js to have different allowable values. 
