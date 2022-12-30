import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col gap-2 p-10">
      <h2 className="text-gray-900 font-bold flex justify-center">
        TOP 200 MONDIAL
      </h2>
      <p className="text-gray-900 text-4xl font-bold flex justify-center">
        Titres les plus découverts
      </p>
      <p className="text-gray-900 text-4xl font-bold flex justify-center">
        dans le monde en ce moment
      </p>
      <p className="flex justify-center">
        Découvrez les titres les plus shazamés dans le monde
      </p>
    </div>
  );
}

export default HomePage;
