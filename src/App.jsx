import Header from "./Header.jsx"
import Box from "./Box/box.jsx";
import './App.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
function App() {

  const data = [
    {number : 1, name : 'lokesh', age : 22, imgUrl : 'data:image/jpeg;base64,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'}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
     , {number : 2, name : 'mohsin', age : 21, imgUrl : img2}
    ];

  return(
    // <>
    //    <Header></Header>
    // <Header></Header>
    // <Header></Header>
    // <Header></Header>
    // </>

    

    <div className="container">
         {
          data.map(({number,name,age,imgUrl}) => {
            return <Box number={number} name={name} age={age} imgUrl={imgUrl}></Box>
          })
         }
    </div>
  );
 
}

export default App
