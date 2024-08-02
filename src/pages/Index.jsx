import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";

const dogBreeds = [
  {
    name: "Labrador Retriever",
    description: "Friendly, active, and outgoing breed known for their intelligence and versatility.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/YellowLabradorLooking_new.jpg"
  },
  {
    name: "German Shepherd",
    description: "Confident, courageous, and smart breed often used in police and military work.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg"
  },
  {
    name: "Golden Retriever",
    description: "Intelligent, friendly, and devoted breed that excels as a family companion.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_Retriever_Dukedestiny01_drvd.jpg"
  },
  {
    name: "Beagle",
    description: "Merry, friendly, and curious breed with an excellent sense of smell.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Beagle_600.jpg"
  }
];

const Index = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Discover Dog Breeds</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dogBreeds.map((breed, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedBreed(breed)}>
            <CardHeader>
              <CardTitle>{breed.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <CardDescription>{breed.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedBreed && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">{selectedBreed.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={selectedBreed.image} alt={selectedBreed.name} className="w-full h-64 object-cover rounded-md mb-4" />
              <p className="text-lg mb-4">{selectedBreed.description}</p>
              <Button onClick={() => setSelectedBreed(null)}>
                <PawPrint className="mr-2 h-4 w-4" /> Close
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;
