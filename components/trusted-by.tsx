import { Companies } from "./companies-section";

export function TrustedBy() {
  return (
    <section className="mb-20 py-10 bg-gray-800 rounded-3xl">
      <h2 className="text-4xl font-bold text-center mb-15">
        Trusted by Leading Companies
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        <Companies />
      </div>
    </section>
  );
}
