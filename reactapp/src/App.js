import React from 'react';
import styled, {keyframes} from 'styled-components'

const shining = keyframes`
0% {
  color: green;
}
20% {
  color: red;
}
40% {
  color: blue;
}
60% {
  color: yellow;
}
80% {
  color: purple;
}
100% {
  color: green;
}`;
const HappyMessage = styled.div`
margin-left: 100px;
margin-top: 100px;
font-size: 55px;
font-weight: bold;
color: green;
animation: ${shining};
animation-duration: 3s;
animation-iteration-count: infinite;
`;

function App() {
  return (
    <div className="App">
      <HappyMessage>
        This is server side rendered app!!!!!
      </HappyMessage>
    </div>
  );
}

export default App;
