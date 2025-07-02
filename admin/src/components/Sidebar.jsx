import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({sidebar,setsidebar}) => {
  const [current, setCurrent] = useState('');

  return (
    <div className={`hidden   md:block md:border-r-2 md:w-[15%] md:h-full md:absolute`} >
      <div className="flex flex-col gap-6 p-4">
        <Link
          onClick={() => setCurrent('add')}
          className={`p-2 rounded text-center ${
            current === 'add'
              ? 'bg-orange-100 border-l-4 border-orange-400'
              : 'hover:bg-orange-50 border-l-2'
          }`}
          to="/add"
        >
          Add List
        </Link>

        <Link
          onClick={() => setCurrent('list')}
          className={`p-2 rounded text-center ${
            current === 'list'
              ? 'bg-orange-100 border-l-4 border-orange-400'
              : 'hover:bg-orange-50 border-l-2'
          }`}
          to="/list"
        >
          Item List
        </Link>

        <Link
          onClick={() => setCurrent('order')}
          className={`p-2 rounded text-center ${
            current === 'order'
              ? 'bg-orange-100 border-l-4 border-orange-400'
              : 'hover:bg-orange-50 border-l-2'
          }`}
          to="/order"
        >
          Order
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
