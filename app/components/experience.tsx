const Experience = () => {
  return (
    <>
      <h2 className='uppercase mb-4 font-semibold tracking-[0.4em] relative after:content-[""] after:absolute after:top-full after:left-0 after:w-12 after:h-0.5 after:bg-primary-accent after:mt-1.5'>
        Experience
      </h2>
      <div className="max-w-lg border border-zinc-700/40 rounded-2xl p-5">
        <ol className='space-y-4'>
          <li className='flex gap-4'>
            <dl className='flex flex-auto flex-wrap gap-x-2'>
              <dt className='sr-only'>Company</dt>
              <dd className='w-full flex-none text-sm font-medium text-white'>
                Planetaria
              </dd>
              <dt className='sr-only'>Role</dt>
              <dd className='text-xs text-slate-300 '>CEO</dd>
              <dt className='sr-only'>Date</dt>
              <dd
                className='ml-auto text-xs text-slate-500'
                aria-label='2019 until Present'
              >
                <time dateTime='2019'>2019</time>{" "}
                <span aria-hidden='true'>—</span>{" "}
                <time dateTime='2025'>Present</time>
              </dd>
            </dl>
          </li>
          <li className='flex gap-4'>
            <dl className='flex flex-auto flex-wrap gap-x-2'>
              <dt className='sr-only'>Company</dt>
              <dd className='w-full flex-none text-sm font-medium text-white'>
                Planetaria
              </dd>
              <dt className='sr-only'>Role</dt>
              <dd className='text-xs text-slate-300 '>CEO</dd>
              <dt className='sr-only'>Date</dt>
              <dd
                className='ml-auto text-xs text-slate-500'
                aria-label='2019 until Present'
              >
                <time dateTime='2019'>2019</time>{" "}
                <span aria-hidden='true'>—</span>{" "}
                <time dateTime='2025'>Present</time>
              </dd>
            </dl>
          </li>
          <li className='flex gap-4'>
            <dl className='flex flex-auto flex-wrap gap-x-2'>
              <dt className='sr-only'>Company</dt>
              <dd className='w-full flex-none text-sm font-medium text-white'>
                Planetaria
              </dd>
              <dt className='sr-only'>Role</dt>
              <dd className='text-xs text-slate-300 '>CEO</dd>
              <dt className='sr-only'>Date</dt>
              <dd
                className='ml-auto text-xs text-slate-500'
                aria-label='2019 until Present'
              >
                <time dateTime='2019'>2019</time>{" "}
                <span aria-hidden='true'>—</span>{" "}
                <time dateTime='2025'>Present</time>
              </dd>
            </dl>
          </li>
        </ol>
        <a href="" className="inline-flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium text-primary-text/90 transition rounded-md bg-secondary-bg group mt-6 w-full">
          Download my CV
          <svg
            viewBox='0 0 16 16'
            fill='none'
            aria-hidden='true'
            className='h-4 w-4 stroke-slate-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50'
          >
            <path
              d='M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
          </svg>
        </a>
        {/* <a
          className='outline-offset-2 active:transition-none bg-muted-text hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group'
          href='#'
        >
          Download CV
          <svg
            viewBox='0 0 16 16'
            fill='none'
            aria-hidden='true'
            className='h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50'
          >
            <path
              d='M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
          </svg>
        </a> */}
      </div>
    </>
  );
};

export default Experience;
