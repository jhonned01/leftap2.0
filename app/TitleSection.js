function TitleSection({ title, image = "" }) {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content — pt-40 to clear the sticky nav */}
      <div className="relative pt-40 pb-20 flex items-center justify-center mx-auto px-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold uppercase">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default TitleSection;
