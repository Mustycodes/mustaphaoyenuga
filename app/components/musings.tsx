import React from "react";
import ArticleCard from "./articleCard";

const Musings = () => {
  return (
    <section>
      <h2 className='uppercase mb-4 font-semibold tracking-[0.4em] relative after:content-[""] after:absolute after:top-full after:left-0 after:w-12 after:h-0.5 after:bg-primary-accent after:mt-1.5'>
        Musings
      </h2>
      <div className="space-y-4">
        {[...Array(3)].map((article) => <ArticleCard />)}
      </div>
    </section>
  );
};

export default Musings;
