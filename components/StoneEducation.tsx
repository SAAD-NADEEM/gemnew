function StoneEducation() {
  const stones = [
    {
      title: "Clarity",
      desc: "The internal and external characteristics of the stone.",
    },
    {
      title: "Cut",
      desc: "The precise geometry that releases the fire within.",
    },
    {
      title: "Carat",
      desc: "The measure of physical weight and presence.",
    },
  ];

  return (
    <section className="bg-background py-20 px-6">
      <p className="text-center text-xs tracking-widest uppercase text-muted-foreground mb-16">
        Stone Education
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {stones.map((stone, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <h3 className="text-foreground text-lg font-medium">{stone.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed w-64 md:max-w-xs">
              {stone.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StoneEducation;