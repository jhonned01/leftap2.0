function TitleSection({ title, image = "" }) {
  return (
    <section
      style={{
        backgroundImage: `url("${image}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="py-24 flex h-full w-full items-center justify-center  mx-auto px-8 lg:w-full bg-black bg-opacity-50">
        {/* <div className="rounded-xl bg-gray-800/50  px-1 py-8   max-w-sm mx-auto">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
            Servicios
          </h1>
        </div> */}
        <div className="max-w-2xl text-center">
          <h1 className=" py-28 text-white lg:text-6xl font-semibold uppercase">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default TitleSection;
