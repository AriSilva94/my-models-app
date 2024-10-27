"use client";
import { useParams, useRouter } from "next/navigation";
import { models } from "../../data/models";
import Image from "next/image";

export default function ModelDetails() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  const model = models.find((model) => model.slug === slug);

  if (!model) {
    return <p className="text-center mt-10">Model not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Details for {model.slug}
        </h2>
        <Image
          src={model.imageUrl}
          alt={model.slug}
          width={500}
          height={300}
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
        <p className="text-gray-600 mb-4">
          Information about {model.name} goes here.
        </p>
        <button
          onClick={() => router.back()}
          className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
}
