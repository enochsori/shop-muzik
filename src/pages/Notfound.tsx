import { useNavigate } from 'react-router-dom';

export default function Notfound() {
  const navigate = useNavigate();

  return (
    <section className='flex'>
      <h1>NOT FOUND</h1>
      <button onClick={() => navigate('/')}>Click to Home</button>
    </section>
  );
}
