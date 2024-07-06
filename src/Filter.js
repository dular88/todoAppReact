import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="btn-group mb-3">
      <button
        className={`btn btn-${filter === 'all' ? 'primary' : 'secondary'}`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`btn btn-${filter === 'completed' ? 'primary' : 'secondary'}`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
      <button
        className={`btn btn-${filter === 'pending' ? 'primary' : 'secondary'}`}
        onClick={() => setFilter('pending')}
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;
