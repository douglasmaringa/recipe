import Image from "next/image";

export default function Page({ params }) {
  const { id } = params;

  return (
    <div className="container mx-auto">
      <div className="flex border-2 border-gray-300 cursor-pointer hover:border-black p-4">
        {/* Image Section on the Left */}
        <div className="relative w-[50%] h-[500px] mr-8">
          <Image
            src="https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg"
            layout="fill"
            objectFit="cover"
            alt="Beef Pie Image"
          />
        </div>

        {/* Information Section on the Right */}
        <div className="w-[50%]">
          <h1 className="bg-white py-4 text-gray-500 font-semibold text-2xl text-center mb-4">
            Beef Pie
          </h1>

          {/* Ingredients Card */}
          <div className="bg-white p-4 mb-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
            <ul className="list-disc pl-4">
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              {/* Add more ingredients as needed */}
            </ul>
          </div>

          {/* Steps Card */}
          <div className="bg-white p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-2">Steps:</h2>
            <ol className="list-decimal pl-4">
              <li>Step 1: Lorem ipsum dolor sit amet.</li>
              <li>Step 2: Consectetur adipiscing elit.</li>
              {/* Add more steps as needed */}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
