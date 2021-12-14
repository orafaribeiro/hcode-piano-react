import React, { useEffect } from 'react';
import styled from 'styled-components';
import PianoKeys from './components/PianoKeys';
import keyboardKeys from './keyboardKeys';

const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - 220px);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  > div {
    height: 200px;
    max-width: 800px;
    display: inherit;
    justify-content: space-around;
    width: 100%;
    img {
      height: 200px;
    }
  }
  section.piano {
    display: flex;
    width: 1070px;
    height: 220px;
    border: 1px solid #000;
    .keys-unit {
      display: flex;      
    }
  }
`;

function App() {

  useEffect(() => {

    const pianoKeysEl = [...document.querySelectorAll('.piano .keys-unit .piano-key')] as HTMLElement[];

    document.addEventListener('keydown', (event: KeyboardEvent) => {

      const pressedKey = event.key;

      const pianoKey = keyboardKeys.find((item) => item.key === pressedKey);

      if (pianoKey) {

        let element = pianoKeysEl.find((el) => el.dataset.key === pianoKey.pianoKey);

        if (element) {
            
          if (pianoKey.isSharp) {

            element = element.querySelector('.black') as HTMLElement;

          }
          
          element.click();

        }

      } else {
        console.error('Nota não encontrada.');
      }

    });

  }, []);

  return (
    <Wrapper>
      <div>
        <img src="/hcode-treinamentos.svg" alt="Logo da Hcode" />
        <img src="/react.svg" alt="Logo do React" />
      </div>

      <section className="piano">
        <div className="keys-unit">
          <PianoKeys groupNumber={2} />          
          <PianoKeys groupNumber={3} />
          <PianoKeys groupNumber={4} />
        </div>
      </section>
    </Wrapper>
  );

}

export default App;
