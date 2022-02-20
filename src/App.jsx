import 'boxicons/css/boxicons.min.css';
import './App.scss';
import Accordion from './components/Accordion';

const data = [
  {
    id: 1,
    title: 'HTML, CSS',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
  magni cum dignissimos fugiat fuga nihil, odio vero odit eos corrupti
  molestiae iste iusto? Totam et sint architecto ducimus laboriosam.`,
  },
  {
    id: 2,
    title: 'JavaScript',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
  magni cum dignissimos fugiat fuga nihil, odio vero odit eos corrupti
  molestiae iste iusto? Totam et sint architecto ducimus laboriosam.`,
  },
  {
    id: 3,
    title: 'React',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
  magni cum dignissimos fugiat fuga nihil, odio vero odit eos corrupti
  molestiae iste iusto? Totam et sint architecto ducimus laboriosam.`,
  },
  {
    id: 4,
    title: 'Vue',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
  magni cum dignissimos fugiat fuga nihil, odio vero odit eos corrupti
  molestiae iste iusto? Totam et sint architecto ducimus laboriosam.`,
  },
  {
    id: 5,
    title: 'Angular',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
  magni cum dignissimos fugiat fuga nihil, odio vero odit eos corrupti
  molestiae iste iusto? Totam et sint architecto ducimus laboriosam.`,
  },
];

function App() {
  return (
    <div className="App" style={{ width: '600px', paddingTop: '100px' }}>
      <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '50px' }}>
        React Accordion
      </h1>
      <ul className="accordion-list">
        {data.map((element) => (
          <Accordion
            key={element.id}
            title={element.title}
            content={element.content}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
