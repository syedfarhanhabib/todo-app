'use client';

import Theme from '@/components/ui/theme';
import React, { useState, ChangeEvent, FormEvent } from 'react';

const Page = () => {
  const [task, setTask] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tasks, setTasks] = useState<{ task: string, description: string }[]>([]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setTasks([...tasks, { task, description }]);
    setTask("");
    setDescription("");
  };

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  let renderTask = <h2>No Tasks available</h2>;
  const deleteHandler = (index: number) => () => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  if (tasks.length > 0) {
    renderTask = (
      <ul>
        {tasks.map((item, index) => (
          <React.Fragment key={index}>
            <li className='flex items-start justify-between gap-5' >
              <div className='p-3 flex w-[90%] gap-5 rounded-xl bg-depth-light dark:bg-depth-dark'>
                <h2 className='font-semibold'>{item.task}</h2>
                <p className='font-light'>{item.description}</p>
              </div>
              <button
                onClick={deleteHandler(index)}
                className='p-3 rounded-xl bg-red active:scale-90 hover:scale-110'>Delete task</button>
            </li>
          </React.Fragment>
        ))}
      </ul>
    );
  }
  return (
    <>
      <header className='fixed w-full p-3 flex items-center justify-between bg-light text-dark dark:text-light dark:bg-dark'>
        <h3>Lorem ipsum</h3>
        <h1 className='text-3xl text-center'>Todo App</h1>
        <Theme />
      </header>
      <section className='w-full leading-none tracking-tighter px-10 min-h-dvh bg-light text-dark dark:text-light dark:bg-dark'>
        <form
          onSubmit={submitHandler}
          action=""
          className='pt-20 w-full flex items-center gap-5 justify-between'
        >
          <input
            value={task}
            onChange={handleTaskChange}
            type="text"
            placeholder='Enter your task here'
            className='w-1/4 p-3 rounded-xl bg-transparent border border-depth-light dark:border-depth-dark'
          />
          <input
            value={description}
            onChange={handleDescriptionChange}
            type="text"
            placeholder='Enter your description here'
            className='w-[65%] p-3 rounded-xl bg-transparent border border-depth-light dark:border-depth-dark'
          />
          <button type='submit' className='p-3 rounded-xl bg-depth-light dark:bg-depth-dark active:scale-90 hover:scale-110'>Add task</button>
        </form>
        <div className='p-3 flex flex-col gap-5 mt-10 rounded-xl bg-depth-light dark:bg-depth-dark'>
          {renderTask}
        </div>
      </section>
    </>
  );
};

export default Page;
