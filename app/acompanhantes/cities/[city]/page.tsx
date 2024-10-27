"use client";
import { useParams } from "next/navigation";
import { models } from "../../../data/models";
import Image from "next/image";
import Link from "next/link";
import { formatNameForUrl } from "@/app/helpers/formatNameForUrl";
import { capitalizeWords } from "@/app/helpers/capitalizeWords";

export default function CityPage() {
  const params = useParams();
  const city = decodeURIComponent(params.city as string);

  const filteredModels = models.filter(
    (model) => formatNameForUrl(model.city) === city.toLowerCase()
  );

  if (filteredModels.length === 0) {
    return <p className="text-center mt-10">No models found in {city}.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Models in {capitalizeWords(city.replace(/-/g, " "))}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredModels.map((model) => (
          <Link key={model.id} href={`/acompanhantes/${model.slug}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={model.imageUrl}
                alt={model.name}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <h3 className="p-4 text-center text-gray-800 font-semibold">
                {model.name}
              </h3>
              <p className="p-4 text-center text-gray-600">
                {model.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
      >
        Início
      </Link>
    </div>
  );
}
