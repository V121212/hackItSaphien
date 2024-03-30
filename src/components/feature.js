import React from 'react';
import Box1 from './Box1'; // Assuming Box1 is a component you've defined elsewhere

const Feature = () => {
  return (
    <div className="flex flex-col gap-2 mt-20">
      <div className="font-bold text-4xl ml-14">Features</div>
      <div className="flex flex-row gap-16 mt-2 ml-12 mr-12">
        <Box1
          title="Global 8888888899999"
          body="Language barrier removal facilitates seamless communication across diverse linguistic backgrounds, enabling global connectivity and collaboration"
        />
        <Box1
          title="Global 8888888899999"
          body="Language barrier removal facilitates seamless communication across diverse linguistic backgrounds, enabling global connectivity and collaboration"
        />
        <Box1
          title="Global 8888888899999"
          body="Language barrier removal facilitates seamless communication across diverse linguistic backgrounds, enabling global connectivity and collaboration"
        />
        <Box1
          title="Global 8888888899999"
          body="Language barrier removal facilitates seamless communication across diverse linguistic backgrounds, enabling global connectivity and collaboration"
        />
      </div>
    </div>
  );
}

export default Feature;
