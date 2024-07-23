import Header from '../Header'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie'
import './index.css'

const AssessmentTasks = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [tasks] = useState([]);

  const onSubmit = (data) => {
    const jwtToken = Cookies.get('jwt_token')
    fetch('http://localhost:3000/assessment', {
        method: 'POST',
        headers: {
            'Authorization' : `Bearer ${jwtToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};

  return (
    <>
      <Header />
      <div className="task-container">
            <h1>Assessment Tasks Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="task-form">
                <input type="text" {...register('Name', { required: true })} placeholder="Name" />
                {errors.Name && <p>Name is required.</p>}
                <input type="text" {...register('taskType', { required: true })} placeholder="Task Type" />
                {errors.taskType && <p>Task Type is required.</p>}
                <input type="text" {...register('status', { required: true })} placeholder="Status" />
                {errors.status && <p>Status is required.</p>}
                <input type="submit" />
            </form>
            <div>
            <ul className='new-list-container'>
              {tasks.map((task) => (
                <li key={task.Name}>
                  {task.Name} - {task.taskType} - {task.status}
                </li>
              ))}
            </ul>
            </div>
        </div>
    </>
  );
}

export default AssessmentTasks