import MemorySection from './components/MemorySection';

const memories = [
  { image: '/images/IMG_0217.jpeg', title: 'That Summer Day', description: 'The beach was quiet. Just us and the waves.' },
  { image: '/images/IMG_1244.jpeg', title: 'Snowy Mornings', description: 'Waking up to frost and warm hands.' },
  { image: '/images/IMG_1461.jpeg', title: 'Late Night Walks', description: 'The city lights guided our way home.' },

];

export default function App() {
  return (
    <main>
      {memories.map((mem, index) => (
        <MemorySection key={index} {...mem} />
      ))}
    </main>
  );
}
