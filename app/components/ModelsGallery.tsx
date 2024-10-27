import { models } from "../data/models";
import Image from "next/image";
import Link from "next/link";
import { formatNameForUrl } from "../helpers/formatNameForUrl";

export default function ModelsGallery() {
  return (
    <main className="container mx-auto py-10">
      <h2 className="text-4xl font-semibold text-center mb-8 text-gray-800">
        Our Models
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {models.map((model) => {
          const citySlug = model.city.replace(/ /g, "-");
          return (
            <div
              key={model.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Link href={`/acompanhantes/${model.slug}`} className="block">
                <Image
                  src={model.imageUrl}
                  alt={model.name}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <p className="p-4 text-center text-gray-800 font-semibold">
                  {model.name}
                </p>
              </Link>
              <div className="p-2 border border-green-500 text-green-500 text-center font-semibold">
                <Link
                  href={`/acompanhantes/cities/${formatNameForUrl(citySlug)}`}
                >
                  {model.city}
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
