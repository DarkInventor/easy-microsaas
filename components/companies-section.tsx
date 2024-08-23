export const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
];

export function Companies() {
  return (
    <section id="companies" className="py-5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative mt-6">
          <div className="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4 xl:grid-cols-8 xl:gap-4">
            {companies.map((company, index) => (
              <img
                key={index}
                src={`https://cdn.magicui.design/companies/${company}.svg`}
                className="h-10 w-40 px-2 brightness-0 invert"
                alt={company}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}