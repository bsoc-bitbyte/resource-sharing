const CategoryCards = (props) => {
  return (
    <div
      style={{
        width: '512px',
        height: '512px',
        background: '#F1F5F9',
        boxShadow: '0px 11px 25px rgba(0, 0, 0, 0.25)',
        borderRadius: '44px',
        overflow: 'hidden',
        margin: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <img
        src={`../../../public/images/${props.card.image}`}
        style={{ opacity: '0.23', position: 'absolute', left: '125px', top: '110px' }}
      />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p
          className="monu"
          style={{
            color: '#37474F',
            textShadow: '5px 4px 4px rgba(0, 0, 0, 0.25)',
            position: 'absolute',
            fontSize: '56px',
            fontWeight: '400',
            lineHeight: '70px',
            letterSpacing: '0em',
            textAlign: 'center',
          }}
        >
          {props.card.domain}
        </p>
      </div>
    </div>
  );
};

export default CategoryCards;
