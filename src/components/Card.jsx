import { Link } from 'react-router-dom';

const Card = ({ creator }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', borderRadius: '8px' }}>
      {creator.imageURL && (
        <img 
          src={creator.imageURL} 
          alt={creator.name}
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
        />
      )}
      <h3>{creator.name}</h3>
      <p>{creator.description}</p>
      <div style={{ marginTop: '12px' }}>
        <a 
          href={creator.url} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ marginRight: '8px', padding: '4px 8px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }}
        >
          Visit Channel
        </a>
        <Link 
          to={`/view/${creator.id}`}
          style={{ marginRight: '8px', padding: '4px 8px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '4px' }}
        >
          View
        </Link>
        <Link 
          to={`/edit/${creator.id}`}
          style={{ padding: '4px 8px', backgroundColor: '#ffc107', color: 'black', textDecoration: 'none', borderRadius: '4px' }}
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default Card;
