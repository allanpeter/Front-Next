// pages/index.js

import React from 'react';

const Home = ({ data }) => {
  return (
    <div>
      {/* Render your component using the fetched data */}
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from your backend API
  const response = await fetch('https://localhost:3500');
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;
