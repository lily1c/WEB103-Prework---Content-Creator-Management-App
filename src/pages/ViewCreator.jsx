import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCreator();
  }, [id]);

  const fetchCreator = async () => {
    try {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setCreator(data);
    } catch (error) {
      console.error('Error fetching creator:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!creator) return <div>Creator not found</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>← Back to Home</Link>
      
      <div style={{ marginTop: '20px' }}>
        {creator.imageURL && (
          <img 
            src={creator.imageURL} 
            alt={creator.name}
            style={{ 
              width: '100%', 
              maxWidth: '400px', 
              height: '300px', 
              objectFit: 'cover', 
              borderRadius: '8px',
              marginBottom: '20px'
            }}
          />
        )}
        
        <h1>{creator.name}</h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
          {creator.description}
        </p>
        
        <div style={{ marginBottom: '20px' }}>
          <a 
            href={creator.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              marginRight: '10px'
            }}
          >
            Visit Channel
          </a>
          
          <Link 
            to={`/edit/${creator.id}`}
            style={{ 
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#ffc107',
              color: 'black',
              textDecoration: 'none',
              borderRadius: '5px'
            }}
          >
            Edit Creator
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewCreator;
