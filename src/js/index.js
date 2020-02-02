// Importing ThirdParty package
import 'jquery'

// Importing css files
import '../css/index.scss'

// // Importing HTML files
// import '../about.html'
// import '../contact.html'

///////////////////////////////////////////////////////////////////////
// Javascript starts here
///////////////////////////////////////////////////////////////////////

// Importing JS modules
import number from './models/test';

console.log(number);

const testButton = $('#btn');
const changeText = () => testButton.text('Text changed with jquery');

testButton.click(changeText);