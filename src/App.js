import ButtonPage from './pages/ButtonPage';
import Accordion from './components/accordion/Accordion'

function App() {

  const items = [
    {id: 1, label: 'item 1', content: 'content item 1'},
    {id: 2, label: 'item 2', content: 'content item 2'},
    {id: 3, label: 'item 3', content: 'content item 3'},
  ];

  return (
    <div>
      <div>
        <ButtonPage/>
        <Accordion items={items}/>
      </div>
    </div>
  );
}

export default App;
